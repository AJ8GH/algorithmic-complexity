export default function findDuplicates (array) {
  const duplicates = array.map(element => {
    const count = []
    array.forEach(el => { if (el === element) { count.push(el) } })
    if (count.length > 1) { return element }
  })

  return duplicates.filter(Boolean)
}
