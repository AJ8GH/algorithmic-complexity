import CodeTimer from '../CodeTimer/lib/CodeTimer.js'
import shuffle from '../algorithms/lib/shuffle.js'

const codeTimer = new CodeTimer()

codeTimer.run({ method: shuffle, size: 2000000, custom: true })
