import CodeTimer from '@aj8/code-timer'
import quadraticShuffle from '../../algorithms/lib/quadraticShuffle.js'

const codeTimer = new CodeTimer()

codeTimer.run({ method: quadraticShuffle, size: 2000, custom: true })
