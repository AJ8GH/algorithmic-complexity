import { expect } from 'chai'
import shuffle from '../lib/shuffle.js'

describe('#shuffle()', () => {
  it('returns a one element array', () => {
    expect(shuffle([1])).to.deep.equal([1])
  })
})
