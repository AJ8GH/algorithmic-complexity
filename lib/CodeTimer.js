export default class CodeTimer {
  constructor () {
    this.startTime = null
    this.finishTime = null
  }

  start () {
    this.startTime = new Date().getTime()
  }

  finish () {
    this.finishTime = new Date().getTime()
  }
}
