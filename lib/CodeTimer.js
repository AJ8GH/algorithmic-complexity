export default class CodeTimer {
  constructor (methodUnderTest) {
    this.startTime = null
    this.finishTime = null
    this.methodUnderTest = methodUnderTest
  }

  time () {
    this._start()
    this.methodUnderTest.call()
    this._finish()
  }

  runTime () {
    return this.finishTime - this.startTime
  }

  _start () {
    this.startTime = new Date().getTime()
  }

  _finish () {
    this.finishTime = new Date().getTime()
  }
}
