import { expect } from 'chai'
import sort from '../lib/sort.js'

describe('#sort()', () => {
  it('returns a 1 element array', () => {
    expect(sort([1])).to.deep.equal([1])
  })
})
