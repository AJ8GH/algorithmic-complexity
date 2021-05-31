import CodeTimer from '@aj8/code-timer'
import findDuplicates from '../algorithms/lib/linearFindDuplicates.js'

const codeTimer = new CodeTimer()

codeTimer.run({ method: findDuplicates, size: 100000, custom: true })
