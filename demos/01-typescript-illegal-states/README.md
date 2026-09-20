# Demo — make illegal states unrepresentable

Beat 3.2's live demo. Same domain as `tester_c_douter/worked-example-update-pipeline.md`:
an anonymized "receive → validate → apply an update event" pipeline. The rule
from that design doc, stated in plain English: *"a cancelled update's result
must never be applied."* Nothing enforces that in the naive model — it's a
convention every caller has to remember. This demo makes it a compiler error
instead.

## The three files

| File | What it shows |
|---|---|
| `src/naive.ts` | `state` is just a string field. Applying a cancelled event compiles fine, runs, and silently corrupts data. |
| `src/safe.ts` | Each state is its own type. `applyUpdate` only accepts `Validated` — there is no overload for `Cancelled`. |
| `src/safe.bug.ts` | The exact same illegal call as `naive.ts`, attempted against the safe model. Meant to fail — that failure is the punchline. |

## Run it live, in this order

```bash
npm install

# 1. The naive model: runs clean, silently wrong.
npm run naive
# → prints "result: { id: 'evt-42', state: 'APPLIED', ... }"
#   for an event that was CANCELLED. No error, no warning.

# 2. The safe model: typechecks clean on its own.
npm run typecheck:safe
# → no output = passed

# 3. The safe model, with the same bug attempted: refused at compile time.
npm run typecheck:bug
# → error TS2345: Argument of type 'Cancelled' is not assignable to
#   parameter of type 'Validated'.
```

## The punchline

Beat 3.2: **"An agent will implement your wrong domain model flawlessly."**
`naive.ts` is what that looks like — an agent (or a human) implementing
`applyUpdate` exactly as asked, on a model that never ruled out the illegal
call in the first place. `safe.ts` is the same feature, on a model that
structurally can't take the illegal call. The bug isn't caught by review, or
by a test someone remembered to write — it's caught by the type checker,
for free, on every future change, without anyone having to remember the rule
again.

## How this differs from Beat 3.3's TLA+ demo

Same worked example, two different kinds of rigor, deliberately shown back
to back:

- **This demo (3.2, DDD / types)** catches the **structural** version of the
  bug — calling `applyUpdate` on the wrong *kind* of value — at **compile
  time**, for free, before anything runs.
- **Beat 3.3's TLA+ demo** (`tester_c_douter/demos/06-tla-update-pipeline`)
  catches the **temporal / concurrency** version of the same idea — P1
  cancelling an event while P3 is mid-apply — exhaustively, at **model-check
  time**. TypeScript's type system can't see that race; it only knows about
  one call at a time, not interleavings across processes.

That's the point of Act 3's two-leg structure: the cheap on-ramp (types)
catches what it can catch, for nothing; the heavier tool (a model checker)
picks up exactly where types structurally can't follow.

## Status

Verified locally: `naive` runs and reproduces the bug; `typecheck:safe`
passes; `typecheck:bug` fails with the expected error. Node with a recent
TypeScript (`^5.6`) is all that's required — `npm install` pulls the one dev
dependency.
