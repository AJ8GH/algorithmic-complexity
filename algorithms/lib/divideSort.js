export default function divideSort (array) {
  const first = array[0]
  if (first > array[1]) {
    array[0] = array[1]
    array[1] = first
  }
  return array
}
