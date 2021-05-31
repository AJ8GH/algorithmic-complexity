import CodeTimer from '@aj8/code-timer'
import linearReverse from '../algorithms/lib/linearReverse.js'

const codeTimer = new CodeTimer()

codeTimer.run({ method: linearReverse, size: 100000, custom: true })
