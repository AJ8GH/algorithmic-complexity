import { expect } from 'chai'
import bubbleSort from '../lib/bubbleSort.js'

describe('#bubbleSort()', () => {
  it('returns a 1 element array', () => {
    expect(bubbleSort([1])).to.deep.equal([1])
  })

  it('sorts a 2 element array', () => {
    expect(bubbleSort([2, 1])).to.deep.equal([1, 2])
  })

  it('sorts a 2 element array', () => {
    expect(bubbleSort([1, 2])).to.deep.equal([1, 2])
  })

  it('sorts a 2 element array', () => {
    expect(bubbleSort([3, 1, 4, 2])).to.deep.equal([1, 2, 3, 4])
  })
})
