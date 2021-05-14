import CodeTimer from '../../lib/CodeTimer.js'

function createIntputSample (initialSize) {
  const inputSample = []
  for (let size = initialSize; size <= initialSize * 20; size += initialSize) {
    inputSample.push(size)
  }
  return inputSample
}

function algorithmRunner (options) {
  const codeTimer = new CodeTimer(options.method)
  const inputSample = createIntputSample(options.size)
  inputSample.forEach(inputArray => codeTimer.time(inputArray))
}

algorithmRunner({ method: [].reverse, size: 1000000 })
