import AlgoRunner from '../CodeTimer/lib/CodeRunner.js'
import reverse from '../algorithms/lib/reverse.js'

const algoRunner = new AlgoRunner()

algoRunner.run({ method: reverse, size: 2000000, custom: true })
