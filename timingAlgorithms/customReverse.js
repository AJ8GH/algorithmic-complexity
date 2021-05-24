import CodeTimer from '../CodeTimer/lib/CodeTimer.js'
import reverse from '../algorithms/lib/reverse.js'

const codeTimer = new CodeTimer()

codeTimer.run({ method: reverse, size: 2000000, custom: true })
