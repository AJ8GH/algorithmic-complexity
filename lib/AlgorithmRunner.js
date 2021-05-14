import CodeTimer from '../lib/CodeTimer.js'

export default class AlgorithmRunner {
  constructor () {
    this.codeTimer = new CodeTimer()
  }

  run (options) {
    const inputSample = new Array(20).fill()
    inputSample.forEach(inputArray => this.codeTimer.time(inputArray))
  }
}
