export default class CodeTimer {
  constructor () {
    this.startTime = null
    this.finishTime = null
  }

  time () {
    this.start()
  }

  start () {
    this.startTime = new Date().getTime()
  }

  finish () {
    this.finishTime = new Date().getTime()
  }

  runTime () {
    return this.finishTime - this.startTime
  }
}
