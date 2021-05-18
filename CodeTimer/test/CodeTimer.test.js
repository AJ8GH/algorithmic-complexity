import chai, { expect } from 'chai'
import spies from 'chai-spies'
import sinon from 'sinon'
import CodeTimer from '../lib/CodeTimer.js'

chai.use(spies)

describe('CodeTimer', () => {
  describe('#time()', () => {
    const testFunction = () => {}

    beforeEach(() => sinon.stub(console, ['log']))
    afterEach(() => sinon.restore())

    it('records the start time', () => {
      const codeTimer = new CodeTimer()
      const startTime = sinon.useFakeTimers(new Date().getTime())

      codeTimer.time({ method: testFunction })

      expect(codeTimer.startTime).to.equal(startTime.now)
    })

    it('records the finish time', () => {
      const codeTimer = new CodeTimer()
      const startTime = sinon.useFakeTimers(new Date().getTime())

      codeTimer.time({ method: testFunction })

      expect(codeTimer.finishTime).to.equal(startTime.now)
    })

    it('Calls the function under test', () => {
      const codeTimer = new CodeTimer()
      codeTimer.methodUnderTest = testFunction

      chai.spy.on(codeTimer, ['methodUnderTest'])

      codeTimer.time({ method: codeTimer.methodUnderTest, arraySize: 5000 })

      expect(codeTimer.methodUnderTest).to.have.been.called()
    })

    it('generates input array', () => {
      const codeTimer = new CodeTimer()

      const inputGenerator = { generate: () => {} }
      codeTimer.inputGenerator = inputGenerator
      chai.spy.on(inputGenerator, ['generate'])

      codeTimer.time({ method: testFunction, arraySize: 5000 })

      expect(inputGenerator.generate).to.have.been.called.with(5000)
    })

    it('uses the printer to output the test run results to console', () => {
      const codeTimer = new CodeTimer()
      const printer = { printResults: () => {} }
      codeTimer.printer = printer
      chai.spy.on(printer, ['printResults'])

      codeTimer.time({ method: testFunction, arraySize: 5000 })

      expect(printer.printResults).to.have.been.called.with(codeTimer)
    })
  })

  describe('#runTime()', () => {
    it('returns the difference between start and finish time', () => {
      const codeTimer = new CodeTimer()

      codeTimer.startTime = 1000
      codeTimer.finishTime = 1500

      expect(codeTimer.runTime()).to.equal(500)
    })
  })

  describe('#timeCustom()', () => {
    it('times a custom made method', () => {
      const codeTimer = new CodeTimer()

      const customMethod = () => { return 'This is a custom method' }
      codeTimer.methodUnderTest = customMethod
      chai.spy.on(codeTimer, ['methodUnderTest'])

      const options = { method: codeTimer.methodUnderTest, arraySize: 5000 }
      codeTimer.timeCustom(options)

      expect(codeTimer.methodUnderTest).to.have.been.called()
    })
  })
})
