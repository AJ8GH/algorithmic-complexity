import CodeTimer from '../CodeTimer/lib/CodeTimer.js'
import linearShuffle from '../algorithms/lib/linearShuffle.js'

const codeTimer = new CodeTimer()

codeTimer.run({ method: linearShuffle, size: 100000, custom: true })
