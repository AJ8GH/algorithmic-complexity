import { expect } from 'chai'
import reverse from '../lib/reverse.js'

describe('#reverse()', () => {
  it('returns a 1 element array', () => {
    expect(reverse([1])).to.deep.equal([1])
  })

  it('reverses a 2 element array', () => {
    expect(reverse([1, 2])).to.deep.equal([2, 1])
  })

  it('reverses a 3 element array', () => {
    expect(reverse([3, 2, 1])).to.deep.equal([1, 2, 3])
  })

  it('reverses a 4 element array', () => {
    expect(reverse([4, 3, 2, 1])).to.deep.equal([1, 2, 3, 4])
  })
})
