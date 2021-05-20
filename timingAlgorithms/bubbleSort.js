import AlgoRunner from '../CodeTimer/lib/AlgoRunner.js'
import bubbleSort from '../algorithms/lib/bubbleSort.js'

const algoRunner = new AlgoRunner()

algoRunner.run({ method: bubbleSort, size: 4000, custom: true })
