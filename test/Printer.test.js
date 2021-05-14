import chai, { expect } from 'chai'
import spies from 'chai-spies'
import sinon from 'sinon'
import Printer from '../lib/Printer.js'

describe('Printer', () => {
  it('outputs the run time to console', () => {
    const printer = new Printer()
    sinon.stub(console, ['log'])

    printer.printResults({ inputSize: 5000 })

    sinon.assert.calledWith(console.log, 5000)
    sinon.restore()
  })

  it('outputs the run time to console', () => {
    // const printer = new Printer()
    // sinon.stub(console, ['log'])

    // printer.printResults()

    // sinon.assert.calledWith(console.log)
  })
})
