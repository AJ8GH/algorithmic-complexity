import InputGenerator from './InputGenerator.js'
import Printer from './Printer.js'

export default class CodeTimer {
  constructor (methodUnderTest) {
    this.methodUnderTest = methodUnderTest
    this.inputSize = null
    this.startTime = null
    this.finishTime = null
    this.inputGenerator = new InputGenerator()
    this.printer = new Printer()
  }

  time (inputSize) {
    const inputArray = this._createInputArray(inputSize)

    this._start()
    this.methodUnderTest.call(inputArray)
    this._finish()

    this.printer.printResults(this)
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
    this.inputSize = inputSize
    return this.inputGenerator.generate(inputSize)
  }
}
