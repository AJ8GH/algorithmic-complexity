import { expect } from 'chai'
import stockPicker from '../lib/stockPicker.js'

describe('#stockPicker()', () => {
  it('knows the profit when there are only 2 prices', () => {
    expect(stockPicker([1, 5])).to.equal(4)
  })

  it('knows the profit when there are 3 prices', () => {
    expect(stockPicker([1, 5, 10])).to.equal(9)
  })

  it('knows the profit when there are 3 prices', () => {
    expect(stockPicker([5, 2, 7, 3, 5, 5, 9, 3, 1, 2, 6, 4])).to.equal(7)
  })
})
