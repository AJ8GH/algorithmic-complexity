import { expect } from 'chai'
import recursiveFibonacci from '../lib/recursiveFibonacci.js'

describe('recursive #recursiveFibonacci', () => {
  it('returns the first recursiveFibonacci number', () => {
    expect(recursiveFibonacci(0)).to.deep.equal([])
  })

  it('returns the first recursiveFibonacci number', () => {
    expect(recursiveFibonacci(1)).to.deep.equal([0])
  })

  it('returns the first 2 recursiveFibonacci numbers', () => {
    expect(recursiveFibonacci(2)).to.deep.equal([0, 1])
  })

  it('returns the first 3 recursiveFibonacci numbers', () => {
    expect(recursiveFibonacci(3)).to.deep.equal([0, 1, 1])
  })

  it('returns the first 4 recursiveFibonacci numbers', () => {
    expect(recursiveFibonacci(4)).to.deep.equal([0, 1, 1, 2])
  })

  it('returns the first 4 recursiveFibonacci numbers', () => {
    expect(recursiveFibonacci(5)).to.deep.equal([0, 1, 1, 2, 3])
  })

  it('returns the first 10 recursiveFibonacci numbers', () => {
    expect(recursiveFibonacci(10)).to.deep.equal([0, 1, 1, 2, 3, 5, 8, 13, 21, 34])
  })
})
