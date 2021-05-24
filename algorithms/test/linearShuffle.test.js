import { expect } from 'chai'
import sinon from 'sinon'
import linearShuffle from '../lib/linearShuffle.js'

beforeEach(() => sinon.restore())
afterEach(() => sinon.restore())

describe('#linearShuffle()', () => {
  it('returns a one element array', () => {
    expect(linearShuffle([1])).to.deep.equal([1])
  })

  it('shuffles a 2 element array', () => {
    sinon.restore()

    sinon.stub(Math, 'random').returns(0.5)

    expect(linearShuffle([1, 2])).to.deep.equal([2, 1])

    sinon.restore()
  })

  it('shuffles a 3 element array', () => {
    sinon.restore()

    sinon.stub(Math, 'random').returns(0.5)

    expect(linearShuffle([1, 2, 3])).to.deep.equal([2, 3, 1])

    sinon.restore()
  })
})
