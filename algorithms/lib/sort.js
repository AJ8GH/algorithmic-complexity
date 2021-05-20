export default function sort (array) {
  let count = 0
  array.forEach((element, i) => {
    if (array[i + 1] < element) {
      array[i] = array[i + 1]
      array[i + 1] = element
      count += 1
    }
  })
  if (count > 0) { sort(array) }
  return array
}

// Input        | Output
// [1]          | [1]
// [2, 1]       | [1, 2]
// [3, 1, 4, 2] | [1, 2, 3, 4]
//              |
//              |
//              |
//              |
