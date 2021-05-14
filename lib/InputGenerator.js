export default class InputGenerator {
  generate (size) {
    const array = new Array(size).fill()
    return this._fillArray(array)
  }

  _fillArray (array) {
    return array.map(() => this._generateRandomNumber())
  }

  _generateRandomNumber () {
    return parseInt(Math.random() * 100)
  }
}
