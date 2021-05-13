import { expect } from 'chai'
import GenerateInputArray from '../lib/InputGenerator.js'

describe('GenerateInputArray()', () => {
  it('generates an array of its argument length', () => {
    const array = GenerateInputArray(5)
    expect(array).to.have.lengthOf(5)
  })
})
