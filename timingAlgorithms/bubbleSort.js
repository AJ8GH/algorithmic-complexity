import CodeRunner from '../CodeTimer/lib/CodeRunner.js'
import bubbleSort from '../algorithms/lib/bubbleSort.js'

const codeRunner = new CodeRunner()

codeRunner.run({ method: bubbleSort, size: 4000, custom: true })
