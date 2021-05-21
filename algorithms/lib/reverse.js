export default function reverse (array) {
  for (let i = 0; i < array.length / 2; i++) {
    const last = array[array.length - i - 1]
    array[array.length + -i - 1] = array[i]
    array[i] = last
  }
  return array
}
