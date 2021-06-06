import { expect } from 'chai'
import stockPicker from '../lib/stockPicker.js'

describe('#stockPicker()', () => {
  it('knows the profit when there are only 2 prices', () => {
    expect(stockPicker([1, 5])).to.equal(4)
  })
})
