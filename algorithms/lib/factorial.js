export default function factorial (number, product) {
  if (number < 2) { return 1 }
  return factorial(number - 1) * number
}
