import CodeTimer from './CodeTimer.js'

const DEFAULT_SAMPLE_SIZE = 20

export default class AlgorithmRunner {
  constructor () {
    this.codeTimer = new CodeTimer()
  }

  run (options) {
    const inputSample = this._createIntputSample(options.size)
    inputSample.forEach((arraySize) => {
      this.codeTimer.time(
        { method: options.method, arraySize: arraySize, custom: options.custom }
      )
    })
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
