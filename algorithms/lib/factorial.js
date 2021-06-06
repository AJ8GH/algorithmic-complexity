export default function factorial (number, product) {
  return (number < 2) ? 1 : factorial(number - 1) * number
}
