// Naive model: illegal states ARE representable.
//
// The design doc says, in plain English: "a cancelled update's result must
// never be applied." Nothing here enforces that — it's a convention every
// caller has to remember. `state` is just a string tag; `payload` exists on
// every event, even the terminal ones that shouldn't carry one anymore.

type State = "STORED" | "PENDING" | "VALIDATED" | "APPLIED" | "REJECTED" | "CANCELLED";

interface UpdateEvent {
  id: string;
  state: State;
  payload: string;
}

function applyUpdate(event: UpdateEvent): UpdateEvent {
  // No guard here checks that `event.state === "VALIDATED"` before applying.
  // That check lives only in whoever wrote (and remembered) this function.
  console.log(`applying ${event.id} — payload: ${event.payload}`);
  return { ...event, state: "APPLIED" };
}

// P1 already cancelled this event — a newer update superseded it, and
// compensation already ran to undo its effect.
const cancelled: UpdateEvent = {
  id: "evt-42",
  state: "CANCELLED",
  payload: "debit:100",
};

// P3 was already mid-flight and applies it anyway. This compiles cleanly.
// It runs without error. It silently corrupts the entity: compensated AND
// applied. This is exactly the bug from Act 2 — a sentence nobody wrote
// down, now sitting quietly in a function signature that accepts anything.
const result = applyUpdate(cancelled);
console.log("result:", result);

export {};
