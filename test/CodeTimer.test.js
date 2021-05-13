import { expect } from 'chai'
import sinon from 'sinon'

import CodeTimer from '../lib/CodeTimer.js'

describe('CodeTimer', () => {
  describe('#start()', () => {
    it('records the start time', () => {
      const codeTimer = new CodeTimer()

      const startTime = sinon.useFakeTimers(new Date().getTime())
      codeTimer.start()

      expect(codeTimer.startTime).to.equal(startTime.now)

      startTime.restore()
    })
  })

  describe('#finish()', () => {
    it('records the finish time', () => {
      const codeTimer = new CodeTimer()

      const startTime = sinon.useFakeTimers(new Date().getTime())
      codeTimer.start()

      const finishTime = sinon.useFakeTimers(startTime.now + 1000)
      codeTimer.finish()

      expect(codeTimer.finishTime).to.equal(finishTime.now)
      finishTime.restore()
    })
  })
})
