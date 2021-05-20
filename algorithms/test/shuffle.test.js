import { expect } from 'chai'
import Sinon from 'sinon'
import shuffle from '../lib/shuffle.js'

describe('#shuffle()', () => {
  it('returns a one element array', () => {
    expect(shuffle([1])).to.deep.equal([1])
  })

  it('shuffles a 2 element array', () => {
    Sinon.stub(Math, 'random').returns(0.5)

    expect(shuffle([1, 2])).to.deep.equal([2, 1])

    Sinon.restore()
  })

  it('shuffles a 3 element array', () => {
    Sinon.stub(Math, 'random').returns(0.5)

    expect(shuffle([1, 2, 3])).to.deep.equal([2, 3, 1])

    Sinon.restore()
  })
})
