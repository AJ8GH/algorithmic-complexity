import CodeTimer from '../lib/CodeTimer.js'

const DEFAULT_SAMPLE_SIZE = 20

export default class AlgorithmRunner {
  constructor () {
    this.codeTimer = new CodeTimer()
  }

  run (options) {
    const inputSample = this._createIntputSample(options.size)
    inputSample.forEach(inputArray => this.codeTimer.time(inputArray))
  }

  _createIntputSample (step) {
    const inputSample = []
    for (
      let arraySize = step;
      arraySize <= step * DEFAULT_SAMPLE_SIZE;
      arraySize += step
    ) {
      inputSample.push(arraySize)
    }
    return inputSample
  }
}
