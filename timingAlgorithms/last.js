import AlgoRunner from '../AlgoTimer/lib/AlgoRunner.js'
import last from '../algorithms/lib/last.js'

const algoRunner = new AlgoRunner()

algoRunner.run({ method: last, size: 2000000, custom: true })
