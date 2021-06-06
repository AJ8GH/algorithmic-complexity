import { expect } from 'chai'
import factorial from '../lib/factorial.js'

describe('#factorial()', () => {
  it('returns the number for factorials less than 3', () => {
    expect(factorial(1)).to.equal(1)
    expect(factorial(2)).to.equal(2)
  })
})
