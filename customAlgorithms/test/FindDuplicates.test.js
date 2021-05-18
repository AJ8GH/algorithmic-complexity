import { expect } from 'chai'
import FindDuplicates from '../lib/FindDuplicates.js'

describe('#findDuplicates()', () => {
  it('returns empty array when given [1]', () => {
    expect(FindDuplicates([1])).to.deep.equal([])
  })
})
