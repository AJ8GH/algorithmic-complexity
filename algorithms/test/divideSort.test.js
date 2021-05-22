import { expect } from 'chai'
import divideSort from '../lib/divideSort.js'

describe('#divideSort()', () => {
  it('returns a one element array', () => {
    expect(divideSort([1])).to.deep.equal([1])
  })

  it('sorts a 2 element array', () => {
    expect(divideSort([2, 1])).to.deep.equal([1, 2])
  })

  xit('sorts a 3 element array', () => {
    expect(divideSort([2, 3, 1])).to.deep.equal([1, 2, 3])
  })
})
