export default function shuffle (array) {
  array.forEach((element, index) => {
    const random = Math.floor(Math.random() * array.length)
    array[index] = array[random]
    array[random] = element
  })
  return array
}
