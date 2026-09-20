// Safe model: illegal states are UNREPRESENTABLE.
//
// Each state gets its own type. The payload only exists where it's still
// meaningful. Terminal states are structurally different from in-flight
// ones, so there is no shared "just change the field" escape hatch.

type Payload = string;

interface Stored    { readonly tag: "STORED";    id: string; payload: Payload }
interface Pending   { readonly tag: "PENDING";   id: string; payload: Payload }
interface Validated { readonly tag: "VALIDATED"; id: string; payload: Payload }
interface Applied   { readonly tag: "APPLIED";   id: string }                   // terminal — no payload left to apply
interface Rejected  { readonly tag: "REJECTED";  id: string; reason: string }   // terminal
interface Cancelled { readonly tag: "CANCELLED"; id: string; reason: string }   // terminal

type UpdateEvent = Stored | Pending | Validated | Applied | Rejected | Cancelled;

// `applyUpdate` is a TOTAL function over its allowed source state only.
// There is no overload that accepts Cancelled, Applied, or Rejected — the
// compiler doesn't know those cases exist for this function, because they
// don't.
function applyUpdate(event: Validated): Applied {
  console.log(`applying ${event.id} — payload: ${event.payload}`);
  return { tag: "APPLIED", id: event.id };
}

const cancelled: Cancelled = {
  tag: "CANCELLED",
  id: "evt-42",
  reason: "superseded by a newer event",
};

// The line that would reproduce naive.ts's bug lives in safe.bug.ts instead
// of here, so this file typechecks clean:
//   const result = applyUpdate(cancelled);
// Run `npm run typecheck:bug` to watch the compiler refuse it.

console.log("cancelled event, never eligible for applyUpdate:", cancelled);

export {};
