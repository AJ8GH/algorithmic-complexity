import CodeTimer from '@aj8/code-timer'
import shuffle from '../algorithms/lib/shuffle.js'

const codeTimer = new CodeTimer()

codeTimer.run({ method: shuffle, size: 2000000, custom: true })
