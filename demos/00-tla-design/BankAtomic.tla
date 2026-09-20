------------------------- MODULE BankAtomic -------------------------
\* THE FIX. The check and the debit happen in ONE atomic step, so the guard is
\* evaluated against the balance that is actually debited. The race is gone.
\*
\* TLC now explores every interleaving and finds NO violation: the invariant is
\* PROVEN to hold for this model. Same tool, same invariant — the design is now
\* correct by construction, not by hope.

EXTENDS Integers

CONSTANTS Procs, Amount, Initial
VARIABLES balance, pState

vars == <<balance, pState>>

Init ==
    /\ balance = Initial
    /\ pState      = [p \in Procs |-> "ready"]

\* Atomic withdraw: guard and debit are inseparable.
Withdraw(p) ==
    /\ pState[p] = "ready"
    /\ balance >= Amount          \* guard
    /\ balance' = balance - Amount \* debit, in the SAME step
    /\ pState'      = [pState EXCEPT ![p] = "done"]

\* A process whose guard fails simply stops (no withdrawal).
Skip(p) ==
    /\ pState[p] = "ready"
    /\ balance < Amount
    /\ pState' = [pState EXCEPT ![p] = "done"]
    /\ UNCHANGED balance

Next == \E p \in Procs : Withdraw(p) \/ Skip(p)

Spec == Init /\ [][Next]_vars

NoOverdraft == balance >= 0
=====================================================================
