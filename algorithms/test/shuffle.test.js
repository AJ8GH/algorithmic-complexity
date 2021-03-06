import { expect } from 'chai'
import sinon from 'sinon'
import shuffle from '../lib/shuffle.js'

describe('#shuffle()', () => {
  it('returns a one element array', () => {
    expect(shuffle([1])).to.deep.equal([1])
  })

  it('shuffles a 2 element array', () => {
    sinon.restore()

    sinon.stub(Math, 'random').returns(0.5)

    expect(shuffle([1, 2])).to.deep.equal([2, 1])

    sinon.restore()
  })

  it('shuffles a 3 element array', () => {
    sinon.restore()

    sinon.stub(Math, 'random').returns(0.5)

    expect(shuffle([1, 2, 3])).to.deep.equal([2, 3, 1])

    sinon.restore()
  })
})
