export default function divideSort (array) {
  const middle = Math.floor(array.length / 2)
  const left = array.slice(0, middle)
  const right = array.slice(middle, array.length)

  if (left[0] < right[0]) {
  }
  if (left > right) {
    array[0] = right
    array[1] = left
  }
  return array
}
