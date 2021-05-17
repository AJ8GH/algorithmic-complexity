import chai, { expect } from 'chai'
import spies from 'chai-spies'
import AlgorithmRunner from '../lib/AlgorithmRunner.js'

chai.use(spies)

describe('AlgorithmRunner', () => {
  describe('#run()', () => {
    it('runs the codeTimer 20 times by default', () => {
      const algorithmRunner = new AlgorithmRunner()
      const testMethod = () => {}
      const codeTimer = { time: () => {} }
      chai.spy.on(codeTimer, ['time'])
      algorithmRunner.codeTimer = codeTimer

      algorithmRunner.run({ method: testMethod, size: 1000 })

      expect(codeTimer.time).to.have.been.called(20)
    })
  })
})
