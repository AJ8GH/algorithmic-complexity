import CodeTimer from '../../lib/CodeTimer.js'

const reverseTimer = new CodeTimer([].reverse)

function createIntputSample () {
  const inputSample = []
  for (let i = 500000; i <= 10000000; i += 500000) { inputSample.push(i) }
  return inputSample
}

const inputSample = createIntputSample()

inputSample.forEach(inputSize => reverseTimer.time(inputSize))
