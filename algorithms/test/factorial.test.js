import { expect } from 'chai'
import factorial from '../lib/factorial.js'

describe('#factorial()', () => {
  it('returns the number for factorials less than 3', () => {
    expect(factorial(1)).to.equal(1)
    expect(factorial(2)).to.equal(2)
  })

  it('knows that 0! is 1', () => {
    expect(factorial(0)).to.equal(1)
  })

  it('knows that 3! is 6', () => {
    expect(factorial(3)).to.equal(6)
  })

  it('knows that 4! is 24', () => {
    expect(factorial(4)).to.equal(24)
  })

  it('knows that 5! is 120', () => {
    expect(factorial(5)).to.equal(120)
  })

  it('knows that 10! is 3628800', () => {
    expect(factorial(10)).to.equal(3628800)
  })
})
