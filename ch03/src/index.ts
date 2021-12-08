// TypeScript’s type hierarchy
//
//                    unknown
//                       |
//                       V
// undefined <- void <- any -> null
//   ____________________|___________________
//  |       |       |      |      |          |
//  V       V       V      V      V          V
// number bigint boolean string symbol Object types
//  |       |       |      |      |          |_________________
//  V       |       |      V      V          |         |       |
// Number   |       |    String unique       V         V       V
// enums    |       |    enums  symbol  Array types Function Constructor
//  |       |       |      |      |          |      types    types
//  |       |       |      |      |          V         |       |
//  |       |       |      |      |     Tuple types    |       |
//  |_______|_______|______|______|__________|_________|_______|
//          V
//        never

// Type aliases
type Age = number;

type Person = {
  name: string;
  age: Age;
};

// Union and intersection types
type Cat = { name: string; purrs: boolean };
type Dog = { name: string; barks: boolean; wags: boolean };
type CatOrDogOrBoth = Cat | Dog;
type CatAndDog = Cat & Dog;

// Types that mean an absence of something
//
// Type      Meaning
//
// null      Absence of a value
// undefined Variable that has not been assigned a value yet
// void      Function that doesn’t have a return statement
// never     Function that never returns

// Exercises
let a = 1042; // numnber
let b = "apples and oranges"; // string
const c = "pineapples"; // "pineapples"
let d = [true, true, false]; // boolean[]
let e = { type: "ficus" }; // { type: string }
let f = [1, false]; // (number | boolean)[]
const g = [3]; // number[]
let h = null; // any
