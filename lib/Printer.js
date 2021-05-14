export default class Printer {
  printResults (codeTimer) {
    const { methodUnderTest, inputSize, runTime } = codeTimer
    console.log(this._createOutputString(
      methodUnderTest.name, inputSize, runTime
    ))
  }

  _createOutputString (method, size, runTime) {
    return `#${method}() => Array Size: ${size}, Run Time: ${runTime}`
  }
}
