import { expect } from 'chai'
import fibonacci from '../lib/fibonacci.js'

describe('#fibonacci()', () => {
  it('returns empty array for 0', () => {
    expect(fibonacci(0)).to.deep.equal([])
  })

  it('returns the first fibonacci number', () => {
    expect(fibonacci(1)).to.deep.equal([0])
  })

  it('returns the first 2 fibonacci numbers', () => {
    expect(fibonacci(2)).to.deep.equal([0, 1])
  })

  it('returns the first 3 fibonacci numbers', () => {
    expect(fibonacci(3)).to.deep.equal([0, 1, 1])
  })

  it('returns the first 4 fibonacci numbers', () => {
    expect(fibonacci(4)).to.deep.equal([0, 1, 1, 2])
  })

  it('returns the first 4 fibonacci numbers', () => {
    expect(fibonacci(5)).to.deep.equal([0, 1, 1, 2, 3])
  })
})
