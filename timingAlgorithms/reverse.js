import CodeTimer from '@aj8/code-timer'

const codeTimer = new CodeTimer()

codeTimer.run({ method: [].reverse, size: 1000000, warmUp: 3, runs: 10 })
