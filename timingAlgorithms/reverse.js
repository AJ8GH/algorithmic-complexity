import CodeTimer from '../CodeTimer/lib/CodeTimer.js'

const codeTimer = new CodeTimer()

codeTimer.run({ method: [].reverse, size: 2000000 })
