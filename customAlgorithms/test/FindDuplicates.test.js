import { expect } from 'chai'
import findDuplicates from '../lib/findDuplicates.js'

describe('#findDuplicates()', () => {
  it('returns empty array when given [1]', () => {
    expect(findDuplicates([1])).to.deep.equal([])
  })

  it('returns both elements from an array of 2 duplicates', () => {
    expect(findDuplicates([1, 1])).deep.equal([1, 1])
  })

  describe('when array has duplicates and non-duplicates', () => {
    it('returns only the duplicates', () => {
      expect(findDuplicates([1, 1, 2])).deep.equal([1, 1])
    })

    it('works with more complex arrays', () => {
      const array = [
        1, 4, 2, 1, 1, 6, 6, '7', 9, '7', '6', 'hello', 0, 8, 'hello'
      ]
      const duplicates = [1, 1, 1, 6, 6, '7', '7', 'hello', 'hello']

      expect(findDuplicates(array)).deep.equal(duplicates)
    })
  })
})
