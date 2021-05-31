import CodeTimer from '@aj8/code-timer'
import findDuplicates from '../algorithms/lib/findDuplicates.js'

const codeTimer = new CodeTimer()

codeTimer.run({ method: findDuplicates, size: 4000, custom: true })
