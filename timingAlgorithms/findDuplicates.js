import findDuplicates from '../algorithms/lib/FindDuplicates.js'
import AlgoRunner from '../CodeTimer/lib/CodeRunner.js'

const algoRunner = new AlgoRunner()

algoRunner.run({ method: findDuplicates, size: 4000, custom: true })
