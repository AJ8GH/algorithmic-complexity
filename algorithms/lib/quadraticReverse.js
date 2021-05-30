export default function quadraticReverse (arr) {
  const newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.unshift(arr[i])
  }
  return newArr
}
