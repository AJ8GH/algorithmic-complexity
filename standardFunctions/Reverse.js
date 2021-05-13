import CodeTimer from '../lib/CodeTimer.js'
import GenerateInputArray from '../lib/InputGenerator.js'

const codeTimer = new CodeTimer()

function TimeReverse (array) {
  codeTimer.start()
  array.reverse()
  codeTimer.finish()
}

const inputArray = GenerateInputArray()

TimeReverse(inputArray)
console.log(codeTimer.runTime())
console.log(codeTimer.startTime)
console.log(codeTimer.finishTime)
