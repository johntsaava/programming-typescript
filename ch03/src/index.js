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
