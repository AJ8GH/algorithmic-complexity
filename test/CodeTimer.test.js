import { expect } from 'chai'
import sinon from 'sinon'

import CodeTimer from '../lib/CodeTimer.js'

describe('CodeTimer', () => {
  describe('#start()', () => {
    it('records the start time', () => {
      const codeTimer = new CodeTimer()

      const time = new Date().getTime()
      sinon.useFakeTimers(time)

      codeTimer.start()

      expect(codeTimer.startTime).to.equal(time)
    })
  })
})
