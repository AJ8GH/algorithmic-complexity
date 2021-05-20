export default function bubbleSort (array) {
  while (true) {
    let count = 0
    array.forEach((element, i) => {
      if (array[i + 1] < element) {
        array[i] = array[i + 1]
        array[i + 1] = element
        count += 1
      }
    })
    if (count === 0) { return array }
  }
}
