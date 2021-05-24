import CodeTimer from '../CodeTimer/lib/CodeTimer.js'
import quadraticShuffle from '../algorithms/lib/quadraticShuffle.js'

const codeTimer = new CodeTimer()

codeTimer.run({ method: quadraticShuffle, size: 2000, custom: true })
