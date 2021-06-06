import { expect } from 'chai'
import quickSort from '../lib/quickSort.js'

describe('#quickSort()', () => {
  it('returns an empty array unchanged', () => {
    expect(quickSort([])).to.deep.equal([])
  })
})
