import { expect } from 'chai'
import reverse from '../lib/customReverse.js'

describe('#reverse()', () => {
  it('returns a 1 element array', () => {
    expect(reverse([1])).to.deep.equal([1])
  })
})
