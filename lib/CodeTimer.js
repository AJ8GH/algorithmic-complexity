export default class CodeTimer {
  constructor () {
    this.startTime = null
  }

  start () {
    this.startTime = new Date().getTime()
  }
}
