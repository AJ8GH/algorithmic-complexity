import CodeTimer from '@aj8/code-timer'
import quadraticReverse from '../algorithms/lib/quadraticReverse.js'

const codeTimer = new CodeTimer()

codeTimer.run({ method: quadraticReverse, size: 2000, custom: true })
