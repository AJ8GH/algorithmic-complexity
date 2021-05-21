import AlgoRunner from '../AlgoTimer/lib/AlgoRunner.js'
import shuffle from '../algorithms/lib/shuffle.js'

const algoRunner = new AlgoRunner()

algoRunner.run({ method: shuffle, size: 2000000, custom: true })
