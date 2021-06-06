export default function insertionSort (array) {
  const length = array.length
  for (let i = 1; i < length; i++) {
    const currentElement = array[i]
    let ii = i - 1
    while (ii >= 0 && array[ii] > currentElement) {
      array[ii + 1] = array[ii]
      ii--
    }
    array[ii + 1] = currentElement
  }
  return array
}
