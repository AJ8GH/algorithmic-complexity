import CodeTimer from '../CodeTimer/lib/CodeTimer.js'

const codeTimer = new CodeTimer()

codeTimer.run({ method: [].unshift, size: 2000000, arg: 100 })
