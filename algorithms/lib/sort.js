export default function sort (array) {
  array.forEach((element, i) => {
    if (array[i + 1] < element) {
      array[i] = array[i + 1]
      array[i + 1] = element
    }
  })
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
