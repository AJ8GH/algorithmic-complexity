export default function reverse (array) {
  if (array.length === 1) { return array }

  for (let i = 0; i < array.length / 2; i++) {
    const last = array[array.length - i - 1]
    array[array.length + -i - 1] = array[i]
    array[i] = last
  }
  return array
}

// actual:    [ 1, 2, 3, 4 ]
// expected:  [ 1, 3, 2, 4 ]

// evens

// 2 el =>
// swap 0 and 1

// 4 el =>
// swap 0 and 3
// swap 1 and 2

// odds =>
// 3 el =>
// swap 0 and 3

// 5 el =>
// swap 0 and 4
// swap 1 and 3
