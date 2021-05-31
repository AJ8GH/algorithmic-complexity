export default function findDuplicates (array) {
  const set = new Set()
  const duplicates = []

  array.forEach(el => {
    set.has(el) ? duplicates.push(el) : set.add(el)
  })

  // array.forEach(el => set.has(el) ? duplicates.push(el) : set.add(el))

  return [...new Set(duplicates)]
}
