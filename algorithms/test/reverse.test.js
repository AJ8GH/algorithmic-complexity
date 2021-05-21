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

  it('reverses a 5 element array', () => {
    expect(reverse([5, 4, 3, 2, 1])).to.deep.equal([1, 2, 3, 4, 5])
  })

  it('reverses a 10 element array', () => {
    expect(
      reverse([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])
    ).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
})
