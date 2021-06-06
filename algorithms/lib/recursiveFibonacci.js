export default function recursiveFibonacci (number, fibonacciNumbers) {
  fibonacciNumbers ||= [0, 1]
  if (number <= 2) { return fibonacciNumbers.slice(0, number) }

  const length = fibonacciNumbers.length
  const sum = fibonacciNumbers[length - 2] + fibonacciNumbers[length - 1]
  fibonacciNumbers.push(sum)
  if (number > 2) { recursiveFibonacci(number - 1, fibonacciNumbers) }

  return fibonacciNumbers
}
