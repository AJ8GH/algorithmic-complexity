import findDuplicates from '../algorithms/lib/FindDuplicates.js'
import AlgoRunner from '../codeTimer/lib/AlgoRunner.js'

const algoRunner = new AlgoRunner()

algoRunner.run({ method: findDuplicates, size: 5000, custom: true })
