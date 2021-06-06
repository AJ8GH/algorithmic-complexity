export default function quickSort (array) {
  if (array.length === 1) { return array }
  if (array[0] > array[1]) {
    return [array[1], array[0]]
  } else {
    return array
  }
}
