export default function shuffle (array) {
  array.forEach((element, i) => {
    const random = Math.floor(Math.random() * array.length)
    array[i] = array[random]
    array[random] = element
  })
  return array
}
