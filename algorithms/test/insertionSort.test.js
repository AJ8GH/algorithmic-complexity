import { expect } from 'chai'
import { InputGenerator } from '@aj8/code-timer'
import insertionSort from '../lib/insertionSort.js'

describe('#insertionSort()', () => {
  it('returns a 1 element array', () => {
    expect(insertionSort([1])).to.deep.equal([1])
  })

  it('sorts a 2 element array', () => {
    expect(insertionSort([2, 1])).to.deep.equal([1, 2])
  })

  it('returns an already sorted 2 element array unchanged', () => {
    expect(insertionSort([1, 2])).to.deep.equal([1, 2])
  })

  it('sorts a 4 element array', () => {
    expect(insertionSort([3, 1, 4, 2])).to.deep.equal([1, 2, 3, 4])
  })

  it('sorts a longer array', () => {
    const inputGenerator = new InputGenerator()
    const array = inputGenerator.generate(10)
    const testArray = [...array]

    const insertionSorted = insertionSort(array)
    const regularSorted = insertionSort(testArray)

    expect(insertionSorted).to.deep.equal(regularSorted)
  })
})
