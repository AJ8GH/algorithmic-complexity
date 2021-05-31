import CodeTimer from '@aj8/code-timer'
import linearShuffle from '../../algorithms/lib/linearShuffle.js'

const codeTimer = new CodeTimer()

codeTimer.run({ method: linearShuffle, size: 100000, custom: true })
