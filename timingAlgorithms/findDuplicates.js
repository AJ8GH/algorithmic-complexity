import findDuplicates from '../algorithms/lib/FindDuplicates.js'
import AlgoRunner from '../AlgoTimer/lib/AlgoRunner.js'

const algoRunner = new AlgoRunner()

algoRunner.run({ method: findDuplicates, size: 4000, custom: true })
