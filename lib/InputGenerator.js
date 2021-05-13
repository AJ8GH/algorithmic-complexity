export default function GenerateInputArray (length) {
  return new Array(length).fill(GenerateRandomNumber())
}

function GenerateRandomNumber () {
  return parseInt(Math.random() * 100)
}
