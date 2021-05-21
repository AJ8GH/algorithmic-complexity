import { expect } from 'chai'
import last from '../lib/last.js'

describe('#last()', () => {
  it('returns a one element array', () => {
    expect(last([1])).to.deep.equal(1)
  })

  it('returns the last element of any array', () => {
    expect(last([1, 2, 4])).to.deep.equal(4)
  })
})
