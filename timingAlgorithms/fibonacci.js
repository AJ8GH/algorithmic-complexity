import CodeTimer from '@aj8/code-timer'
import fibonacci from '../algorithms/lib/fibonacci.js'

const codeTimer = new CodeTimer()

const options = {
  method: fibonacci,
  size: 1000000,
  integer: true,
  custom: true
}

codeTimer.run(options)
