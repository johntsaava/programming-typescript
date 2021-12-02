// Compiling and running TypeScript

// ts
// 1. ts source -> ts AST
// 2. AST is checked by typechecker
// 3. ts AST -> js source

// js
// 4. js source -> js AST
// 5. AST -> bytecode
// 6. bytecode is evaluated by runtime

let a = 1 + 2;
let b = a + 3;
let c = {
  apple: a,
  banana: b,
};
let d = c.apple * 4;
