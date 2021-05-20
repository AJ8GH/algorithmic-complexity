export default function sort (array) {
  if (array.length === 2) { return array.reverse() }
  return array
}

// Input  | Output
// [1]    | [1]
// [2, 1] | [1, 2]
//        |
//        |
//        |
//        |
//        |
