export default function fibonnacci (number) {
  const fibonacciNumbers = [0, 1]
  if (number <= 2) { return fibonacciNumbers.slice(0, number) }

  for (let i = 0; i < number - 2; i++) {
    fibonacciNumbers.push(fibonacciNumbers[i] + fibonacciNumbers[i + 1])
  }
  return fibonacciNumbers
}
