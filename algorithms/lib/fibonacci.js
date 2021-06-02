export default function fibonnacci (number) {
  if (number === 0) { return [] }
  if (number === 1) { return [0] }

  const fibonaccis = [0, 1]
  for (let i = 0; i < number - 2; i++) {
    fibonaccis.push(fibonaccis[i] + fibonaccis[i + 1])
  }
  return fibonaccis
}
