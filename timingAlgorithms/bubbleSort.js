import CodeTimer from '@aj8/code-timer'
import bubbleSort from '../algorithms/lib/bubbleSort.js'

const codeTimer = new CodeTimer()

codeTimer.run({ method: bubbleSort, size: 4000, custom: true })
