import CodeTimer from '@aj8/code-timer'
import last from '../algorithms/lib/last.js'

const codeTimer = new CodeTimer()

codeTimer.run({ method: last, size: 2000000, custom: true })
