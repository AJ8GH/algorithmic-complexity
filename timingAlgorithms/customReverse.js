import AlgoRunner from '../AlgoTimer/lib/AlgoRunner.js'
import reverse from '../algorithms/lib/reverse.js'

const algoRunner = new AlgoRunner()

algoRunner.run({ method: reverse, size: 2000000, custom: true })
