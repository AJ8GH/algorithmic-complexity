export default function reverse (array) {
  if (array.length === 1) { return array }
  const last = array[array.length - 1]
  array[array.length - 1] = array[0]
  array[0] = last
  return array
}
