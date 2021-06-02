export default function fibonnacci (number) {
  if (number === 0) {
    return []
  } else if (number === 1) {
    return [0]
  }

  const fibonaccis = [0, 1]
  for (let i = 0; i < number - 2; i++) {
    fibonaccis.push(fibonaccis[i] + fibonaccis[i + 1])
  }
  return fibonaccis
}

fibonnacci(3)

// Create a function that takes a number N and
// returns an array of the first N numbers in the
// [Fibonacci sequence](https://www.mathsisfun.com/numbers/fibonacci-sequence.html).

// For example:

// | N | expected return |
// |-------|--------|
// |`0`| `[]`|
// |`3`|`[0, 1, 1]`|
// |`10`|`[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]`|
