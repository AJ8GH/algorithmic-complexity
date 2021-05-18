import { expect } from 'chai'
import findDuplicates from '../lib/findDuplicates.js'

describe('#findDuplicates()', () => {
  it('returns empty array when given [1]', () => {
    expect(findDuplicates([1])).to.deep.equal([])
  })

  it('returns both elements from an array of 2 duplicates', () => {
    expect(findDuplicates([1, 1])).deep.equal([1, 1])
  })
})
