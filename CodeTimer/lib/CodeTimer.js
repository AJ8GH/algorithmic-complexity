import InputGenerator from './InputGenerator.js'
import Printer from './Printer.js'

export default class CodeTimer {
  constructor () {
    this.methodUnderTest = null
    this.arraySize = null
    this.startTime = null
    this.finishTime = null
    this.inputGenerator = new InputGenerator()
    this.printer = new Printer()
  }

  time (options) {
    const inputArray = this._createInputArray(options.arraySize)
    this.methodUnderTest = options.method

    this._start()
    this.methodUnderTest.call(inputArray)
    this._finish()

    this.printer.printResults(this)
  }

  timeCustom (options) {
    const inputArray = this._createInputArray(options.arraySize)
    this.methodUnderTest = options.method

    this._start()
    this.methodUnderTest(inputArray)
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

  _createInputArray (arraySize) {
    this.arraySize = arraySize
    return this.inputGenerator.generate(arraySize)
  }
}
