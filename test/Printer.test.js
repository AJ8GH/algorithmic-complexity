import chai, { expect } from 'chai'
import spies from 'chai-spies'

chai.use(spies)

describe('Printer', () => {
  it('outputs the run time to console', () => {
    chai.spy.on(console, ['log'])

    // expect(console.log).to.have.been.called.with(codeTimer.runTime())
  })
})
