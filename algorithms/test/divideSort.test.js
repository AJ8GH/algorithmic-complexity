import { expect } from 'chai'
import divideSort from '../lib/divideSort.js'

describe('#divideSort()', () => {
  it('returns a one element array', () => {
    expect(divideSort([1])).to.deep.equal([1])
  })

  it('returns a one element array', () => {
    expect(divideSort([2, 1])).to.deep.equal([1, 2])
  })
})
