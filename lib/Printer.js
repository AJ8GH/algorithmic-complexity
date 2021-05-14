export default class Printer {
  printResults (codeTimer) {
    const { methodUnderTest, inputSize, runTime } = codeTimer
    console.log(
      `#${methodUnderTest.name}() => Array Size: ${inputSize}, Run Time: ${runTime}`
    )
  }
}
