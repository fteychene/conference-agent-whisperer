# Rung 0 — Design verification with TLA+ (the architecture analogue)

**Guarantee:** an *architectural* invariant holds across **every** possible
interleaving of concurrent operations — checked exhaustively, before you write
the system.
**Tooling:** TLA+ / TLC model checker (just a JAR + Java). Verified locally with
**TLC 2.19** on Java 21. ✅

## Why this rung exists

The binary-search ladder (rungs 1–5) answers *"is this function correct?"* — the
algorithm question that maybe 1% of developers face daily. This rung answers the
question the other 99% actually get wrong: ***is my system DESIGN correct?***
Concurrency, races, protocols, state machines, ordering, invariants that span
components.

This is the older half of formal methods — Hillel Wayne calls it **design
verification** (vs. code verification). It's the same tool **AWS** used to find
real design bugs (verified from their 2014 paper's own table): **2+1 in S3,
3 in DynamoDB (one needing a 35-step trace), 3 in EBS**, and 1 in an internal
lock manager — bugs they state "testing the code is inadequate" to find "as the
number of reachable states of the code is astronomical" (see
`../../sources/bibliography.md`).

## The bug: a check-then-act race (an architecture bug, not an algorithm bug)

`Bank.tla` models the most ordinary thing in the world: withdraw money if the
balance is sufficient. Two concurrent withdrawers, each taking 6 from a starting
balance of 10. Sequentially the second withdrawal is refused. But the
"**check** the balance" and "**debit**" steps are not atomic.

No unit test reliably catches this — it needs a precise interleaving. TLC
explores *all* of them and hands you the exact trace.

## Run it

```bash
JAR=../../tools/tla2tools.jar     # download once, see ../../README.md

# BROKEN design — expect: "Invariant NoOverdraft is violated" + a counterexample
java -cp "$JAR" tlc2.TLC Bank.tla

# FIXED design — expect: "No error has been found"
java -cp "$JAR" tlc2.TLC BankAtomic.tla
```

## What TLC prints for the broken design (real output, trimmed)

```
Error: Invariant NoOverdraft is violated.
State 1:  balance = 10   pc = (p1 :> "check"  @@ p2 :> "check")
State 2:  balance = 10   pc = (p1 :> "debit"  @@ p2 :> "check")   \* p1 passed the guard
State 3:  balance = 10   pc = (p1 :> "debit"  @@ p2 :> "debit")   \* p2 ALSO passed it
State 4:  balance =  4   pc = (p1 :> "done"   @@ p2 :> "debit")   \* p1 debits
State 5:  balance = -2   pc = (p1 :> "done"   @@ p2 :> "done")    \* p2 debits -> OVERDRAWN
```

Five steps to a negative bank balance. That is the design flaw, made impossible
to argue with.

## The fix

`BankAtomic.tla` collapses guard + debit into a **single atomic step**. TLC then
explores every interleaving and reports **"No error has been found"** — the
invariant is proven for this model. Same tool, same invariant; the design is now
correct by construction.

## How this ties into the talk

- **Same shape as the binary-search story, one level up:** a bug that hides from
  tests, caught statically/exhaustively by a checker.
- **The model checker was always push-button** — TLC needed no proof scripts.
  What historically made design verification "not worth it" was *writing and
  maintaining the spec*. That is exactly the boilerplate an agent now drafts.
- **The honest counterpoint (carry it):** LLMs are currently *weak* at authoring
  design specs — best semantic correctness only **8.6%** on a TLA+ benchmark
  (SysMoBench, see bibliography). So this rung sharpens the thesis instead of
  softening it: agents collapse the cost of the *boilerplate and the checking*,
  but authoring the design intent is where the human moves up to.

> ✅ Both specs were run in this environment (TLC 2.19): `Bank.tla` violates
> NoOverdraft with a 5-step trace (13 states generated, 12 distinct);
> `BankAtomic.tla` reports *"Model checking completed. No error has been found"*
> (4 distinct states).
>
> Note `BankAtomic.cfg` sets `CHECK_DEADLOCK FALSE`: both processes legitimately
> finish, leaving a terminal state that TLC's default deadlock check would
> otherwise flag as a false alarm. Termination here is intended, not a deadlock.
