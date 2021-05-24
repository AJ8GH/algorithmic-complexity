import CodeTimer from '../CodeTimer/lib/CodeTimer.js'

const codeTimer = new CodeTimer()

codeTimer.run({ method: [].shift, size: 1000000 })
