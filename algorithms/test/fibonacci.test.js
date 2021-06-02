import { expect } from 'chai'
import fibonacci from '../lib/fibonacci.js'

describe('#fibonacci()', () => {
  it('returns empty array for 0', () => {
    expect(fibonacci(0)).to.deep.equal([])
  })

  it('returns the first fibonacci number for 1', () => {
    expect(fibonacci(1)).to.deep.equal([0])
  })
})
