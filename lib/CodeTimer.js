import InputGenerator from './InputGenerator.js'

export default class CodeTimer {
  constructor (methodUnderTest) {
    this.startTime = null
    this.finishTime = null
    this.methodUnderTest = methodUnderTest
    this.inputGenerator = new InputGenerator()
  }

  time (inputSize) {
    const inputArray = this._createInputArray(5000)
    this._start()
    this.methodUnderTest.call(inputArray)
    this._finish()
  }

  runTime () {
    return this.finishTime - this.startTime
  }

  _start () {
    this.startTime = new Date().getTime()
  }

  _finish () {
    this.finishTime = new Date().getTime()
  }

  _createInputArray (size) {
    return this.inputGenerator.generate(size)
  }
}
