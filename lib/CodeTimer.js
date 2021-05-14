import InputGenerator from './InputGenerator.js'

export default class CodeTimer {
  constructor (methodUnderTest) {
    this.startTime = null
    this.finishTime = null
    this.methodUnderTest = methodUnderTest
    this.inputGenerator = new InputGenerator()
  }

  time (inputSize) {
    const inputArray = this._createInputArray(inputSize)
    this._start()
    this.methodUnderTest.call(inputArray)
    this._finish()
    console.log(inputSize, this.runTime())
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

  _createInputArray (inputSize) {
    return this.inputGenerator.generate(inputSize)
  }
}
