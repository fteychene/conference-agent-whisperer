// Same model as safe.ts, but with the naive.ts bug attempted on purpose.
// This file is meant to fail `npm run typecheck:bug` — that failure IS the
// demo. Live: run typecheck:safe (green) first, then typecheck:bug (red),
// same way the TLA+ demo in Beat 3.3 goes from a counterexample to
// "No error has been found."

type Payload = string;

interface Stored    { readonly tag: "STORED";    id: string; payload: Payload }
interface Pending   { readonly tag: "PENDING";   id: string; payload: Payload }
interface Validated { readonly tag: "VALIDATED"; id: string; payload: Payload }
interface Applied   { readonly tag: "APPLIED";   id: string }
interface Rejected  { readonly tag: "REJECTED";  id: string; reason: string }
interface Cancelled { readonly tag: "CANCELLED"; id: string; reason: string }

type UpdateEvent = Stored | Pending | Validated | Applied | Rejected | Cancelled;

function applyUpdate(event: Validated): Applied {
  console.log(`applying ${event.id} — payload: ${event.payload}`);
  return { tag: "APPLIED", id: event.id };
}

const cancelled: Cancelled = {
  tag: "CANCELLED",
  id: "evt-42",
  reason: "superseded by a newer event",
};

// naive.ts's bug, attempted here: apply a cancelled event.
// Expected: "Argument of type 'Cancelled' is not assignable to parameter
// of type 'Validated'." The bug that ran silently in naive.ts doesn't
// compile here.
const result = applyUpdate(cancelled);
console.log("result:", result);

export {};
