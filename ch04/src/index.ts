// 1. both

// 2. no. rest parameter

// 3.
type Reservation = unknown;

type Reserve = {
  (from: Date, to: Date, destination: string): Reservation;
  (from: Date, destination: string): Reservation;
  (destination: string): Reservation;
};

let reserve: Reserve = (
  fromOrDestination: Date | string,
  toOrDestination?: Date | string,
  destination?: string
) => {
  if (
    fromOrDestination instanceof Date &&
    toOrDestination instanceof Date &&
    destination !== undefined
  ) {
    // Book a one-way trip
  } else if (
    fromOrDestination instanceof Date &&
    typeof toOrDestination === "string"
  ) {
    // Book a round trip
  } else if (typeof fromOrDestination === "string") {
    // Book a trip right away
  }
};

// 4.
function call<T extends [unknown, string, ...unknown[]], R>(
  f: (...args: T) => R,
  ...args: T
): R {
  return f(...args);
}
function fill(length: number, value: string): string[] {
  return Array.from({ length }, () => value);
}
call(fill, 10, "a"); // evaluates to an array of 10 'a's

// 5
type Is = {
  <T>(...args: T[]): boolean;
};

const is: Is = (a, ...b) => {
  return b.every((_) => _ === a);
};

// Compare a string and a string
console.log(is("string", "otherstring")); // false
// Compare a boolean and a boolean
console.log(is(true, false)); // false
// Compare a number and a number
console.log(is(42, 42)); // true

// [Hard] I should be able to pass any number of arguments
console.log(is([1, 2], [1, 2], [1, 2])); // false
