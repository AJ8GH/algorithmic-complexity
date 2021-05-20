import { expect } from 'chai'
import sort from '../lib/sort.js'

describe('#sort()', () => {
  it('returns a 1 element array', () => {
    expect(sort([1])).to.deep.equal([1])
  })

  it('sorts a 2 element array', () => {
    expect(sort([2, 1])).to.deep.equal([1, 2])
  })

  it('sorts a 2 element array', () => {
    expect(sort([1, 2])).to.deep.equal([1, 2])
  })

  it('sorts a 2 element array', () => {
    expect(sort([3, 1, 4, 2])).to.deep.equal([1, 2, 3, 4])
  })
})
