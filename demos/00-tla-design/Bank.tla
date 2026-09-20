---------------------------- MODULE Bank ----------------------------
\* RUNG 0 — DESIGN verification (the architecture analogue of binary search).
\*
\* This is NOT an algorithm bug. It is an ARCHITECTURE bug: two concurrent
\* withdrawals that each do "check the balance, THEN debit" — a check-then-act
\* race. The two steps are not atomic, so both can pass the guard before either
\* debits, and the account goes negative.
\*
\* No unit test reliably catches this: it depends on a specific interleaving of
\* concurrent operations. But TLC (the TLA+ model checker) explores EVERY
\* interleaving exhaustively and hands you the exact trace that breaks it.
\*
\* This is the half of formal methods built for DESIGN, not code
\* (Hillel Wayne's "design verification"; the same tool AWS used to find bugs
\* in S3 / DynamoDB / EBS).  Run it:  see README.md.

EXTENDS Integers

CONSTANTS Procs,      \* the set of concurrent withdrawers, e.g. {p1, p2}
          Amount,     \* how much each one withdraws
          Initial     \* the starting balance

VARIABLES balance,    \* the shared account balance
          pState,         \* each process's program counter
          checked     \* what each process saw when it ran its guard

vars == <<balance, pState, checked>>

Init ==
    /\ balance = Initial
    /\ pState      = [p \in Procs |-> "check"]
    /\ checked = [p \in Procs |-> FALSE]

\* Step 1: read the balance and remember whether the guard passed.
Check(p) ==
    /\ pState[p] = "check"
    /\ checked' = [checked EXCEPT ![p] = (balance >= Amount)]
    /\ pState'      = [pState EXCEPT ![p] = "debit"]
    /\ UNCHANGED balance

\* Step 2: debit — but based on the (now possibly stale) earlier check.
Debit(p) ==
    /\ pState[p] = "debit"
    /\ balance' = IF checked[p] THEN balance - Amount ELSE balance
    /\ pState'      = [pState EXCEPT ![p] = "done"]
    /\ UNCHANGED checked

Next == \E p \in Procs : Check(p) \/ Debit(p)

Spec == Init /\ [][Next]_vars

\* The invariant the architecture is supposed to guarantee.
\* TLC will find an interleaving that violates it.
NoOverdraft == balance >= 0
=====================================================================
