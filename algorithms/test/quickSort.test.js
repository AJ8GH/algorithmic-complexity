import { expect } from 'chai'
import InputGenerator from '@aj8/code-timer'
import quickSort from '../lib/quickSort.js'

describe('#quickSort()', () => {
  it('returns an empty array unchanged', () => {
    expect(quickSort([])).to.deep.equal([])
  })

  xit('sorts a 2 element array', () => {
    expect(quickSort([2, 1])).to.deep.equal([1, 2])
  })

  xit('sorts a 3 element array', () => {
    expect(quickSort([2, 1, 3])).to.deep.equal([1, 2, 3])
  })

  xit('sorts a 4 element array', () => {
    expect(quickSort([3, 1, 5, 4, 2])).to.deep.equal([1, 2, 3, 4, 5])
  })

  xit('sorts a longer array', () => {
    const inputGenerator = new InputGenerator()
    const array = inputGenerator.generate(10)
    const testArray = [...array]

    const insertionSorted = quickSort(array)
    const regularSorted = quickSort(testArray)

    expect(insertionSorted).to.deep.equal(regularSorted)
  })
})
