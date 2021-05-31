import CodeTimer from '@aj8/code-timer'
import reverse from '../algorithms/lib/reverse.js'

const codeTimer = new CodeTimer()

codeTimer.run({ method: reverse, size: 2000000, custom: true })
