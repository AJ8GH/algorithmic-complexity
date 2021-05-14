import CodeTimer from '../lib/CodeTimer.js'

export default class AlgorithmRunner {
  constructor () {
    this.codeTimer = null
  }

  run (options) {
    this.codeTimer = new CodeTimer(options.method)
    const inputSample = new Array(20).fill()
    inputSample.forEach(inputArray => this.codeTimer.time(inputArray))
  }
}
