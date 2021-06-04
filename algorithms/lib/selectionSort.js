export default function selectionSort (array) {
  const sortedArray = []
  const arrayLength = array.length

  while (sortedArray.length < arrayLength) {
    let minValue = array[0]
    let minIndex

    array.forEach((element, currentIndex) => {
      if (element < minValue) {
        minValue = element
        minIndex = currentIndex
      }
    })

    sortedArray.push(minValue)
    array.splice(minIndex, 1)
  }

  console.log(sortedArray)
  return sortedArray
}
