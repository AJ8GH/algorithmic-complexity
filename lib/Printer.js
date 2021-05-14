export default class Printer {
  printResults (codeTimer) {
    const { methodUnderTest, inputSize } = codeTimer
    console.log(this._createOutputString(
      methodUnderTest.name, inputSize, codeTimer.runTime()
    ))
  }

  _createOutputString (method, size, runTime) {
    return `#${method}() => Array Size: ${size}, Run Time: ${runTime}`
  }
}
