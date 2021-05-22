import AlgoRunner from '../CodeTimer/lib/CodeRunner.js'
import last from '../algorithms/lib/last.js'

const codeRunner = new AlgoRunner()

codeRunner.run({ method: last, size: 2000000, custom: true })
