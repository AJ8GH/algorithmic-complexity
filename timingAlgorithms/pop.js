import CodeTimer from '../CodeTimer/lib/CodeTimer.js'

const codeTimer = new CodeTimer()

codeTimer.run({ method: [].pop, size: 1000000 })
