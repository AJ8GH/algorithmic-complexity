Algorithmic Complexity
======================

[![Build Status](https://travis-ci.com/AJ8GH/algorithmic-complexity.svg?branch=main)](https://travis-ci.com/AJ8GH/algorithmic-complexity) [![codecov](https://codecov.io/gh/AJ8GH/algorithmic-complexity/branch/main/graph/badge.svg?token=NIRGH88CMT)](https://codecov.io/gh/AJ8GH/algorithmic-complexity) [![Maintainability](https://api.codeclimate.com/v1/badges/632627257c17ccb5d748/maintainability)](https://codeclimate.com/github/AJ8GH/algorithmic-complexity/maintainability) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![BCH compliance](https://bettercodehub.com/edge/badge/AJ8GH/algorithmic-complexity?branch=main)](https://bettercodehub.com/)

A course focused on Computer Science concepts around algorithmic complexity.

## Learning objectives

* Analyse how efficient programmes and algorithms are.
* Take a deeper look at how programmes interact with memory.
* How to use that to make our own programmes faster.


By the end of this course, the goal is to be able to answer "yes" to these questions:

* **Mention efficiency as one of the dimension of a good piece of code**
* **Join a conversation about algorithms and their complexity**

## Overview of the course

* Create a framework to time different built in algorithms and compare their efficiency
* Write custom algorithms, trying to be as efficient as possible

## Time Complexity

![curves](images/curves.png)

Types of curve relating to different algorithmic time complexity, in order of efficiency

Curve | Type         | Big O
------|--------------|------
a     | Constant     | O(1)
b     | Logarithmic  | O(log n)
c     | Square root  | O(sqrt n)
d     | Linear       | O(n)
e     | Quadratic    | O(n^2)
f     | Cubic        | O(n^3)
g     | Polynomial   | O(n^k)
h     | Exponential  | O(2^n)

*k = some constant > 1*

## Building a timing framework

The first step towards measuring algorithmic complexity was designing and building a timing framework. I used TDD and OOP principles to build a timing framework with Node.js and Mocha. I test drove the code-timer module in this repository, before transferring it to a stand-alone repository, seting up CI/CD and publishing it as an NPM package. Once it was published, I removed the code-timer from this repo and installed it as an NPM module instead, using this to time my code.

### Code Timer
* [GitHub Repository](https://github.com/AJ8GH/code-timer)
* [NPM Package Homepage](https://www.npmjs.com/package/@aj8/code-timer)

**The framework can be used:**
- As a manual timer to time any code, using the `#start()` and `#stop()` functions.
- To time built in functions or custom made algorithms.
- To time an algorithm on a single array using the .
- To time an algorithm on multiple arrays with increasing size

**Class responsibilities:**
- The `CodeTimer` class is responsible for timing the code.
- The `CodeRunner` class is responsible for running the timer on multiple inputs.
- The `InputGenerator` class is responsible for creating arrays of random numbers to run the algorithms on.
- The `Printer` class is responsible for outputting the method name, input size and run time to the terminal after each run.

## Timing Results

### Built in methods

### Reverse

#### Graph

![reverse-graph](images/reverse-graph.png)

#### Time complexity
* **Linear**
* **O(n)**

### Sort

#### Graph
![sort-graph](images/sort-graph.png)

#### Time complexity
* **Linear**
* **O(n)**

## Building Custom Algorithms

### Find duplicates

Return the elements in a array which appear more than once.

[View Algorithm](https://github.com/AJ8GH/algorithmic-complexity/blob/main/algorithms/lib/quadraticFindDuplicates.js)

#### Graph
![find-duplicates-graph](images/find-duplicates-graph.png)

#### Time complexity
* **Quadratic**
* **O(n^2)**

### Bubble Sort

Sort an array by swapping neighbouring elements until the entire array is sorted.

[View Algorithm](https://github.com/AJ8GH/algorithmic-complexity/blob/main/algorithms/lib/bubbleSort.js)

#### Graph
![bubble-sort-graph](images/bubble-sort-graph.png)

#### Time complexity
* **Quadratic**
* **O(n^2)**

### Shuffle

Create an algorithm to shuffle an array.

[View Algorithm](https://github.com/AJ8GH/algorithmic-complexity/blob/main/algorithms/lib/shuffle.js)

#### Graph

![shuffle-graph](images/shuffle-graph.png)

#### Time complexity
* **Linear**
* **O(n)**

### Custom Reverse

Reverse an array without using the built in reverse function.

[View Algorithm](https://github.com/AJ8GH/algorithmic-complexity/blob/main/algorithms/lib/reverse.js)

#### Graph
![custom-reverse-graph](images/custom-reverse-graph.png)

#### Time complexity
* **Linear**
* **O(n)**

### Last

Return last element of array.

[View Algorithm](https://github.com/AJ8GH/algorithmic-complexity/blob/main/algorithms/lib/last.js)

#### Time complexity
* **Constant**
* **O(1)**

## Memory

* Memory is stored in the heap
* Everything stored in binary
* Data and its type are both stored as binary, so that computer knows what the binary represents
* Bit is one binary digit (0 or 1)
* Byte is 8 bits
* Nibble is 4 bits - half a byte

Binary

256   | 128   | 64   | 32   | 16   | 8   |  4  | 2   | 1
------|-------|------|------|------|-----|-----|-----|-----
252^8 | 122^7 | 62^6 | 32^5 | 12^4 | 2^3 | 2^2 | 2^1 | 2^0

**largest integer in 1 byte = 255**

256   | 128   | 64   | 32   | 16   | 8   |  4  | 2   | 1
------|-------|------|------|------|-----|-----|-----|-----
0     | 1     | 1    | 1    | 1    | 1   | 1   | 1   | 1

**256:**

256   | 128   | 64   | 32   | 16   | 8   |  4  | 2   | 1
------|-------|------|------|------|-----|-----|-----|-----
1     | 0     | 0    | 0    | 0    | 0   | 0   | 0   | 0

When data is stored in memory it is given a hexidecimal memory address, corresponding to its space in memory

Modern computers use 64 bit architecture for memory addresses

### Arrays

When an array is stored, each element is stored consecutively. The length of the array is also stored. This is why finding the last element of an array is always constant time.

**Dynamic arrays:**

Ruby, JavaScript, Python, etc.

When storing a dynamic array, double the length is allocated, to allow for adding elements to array.

Once the limit is reached, the memory allocation is abandoned, and a new allocation is made, for double the new length.

**Static / primitive arrays:**

C, Java, etc.

When creating a static array, the size must be specified, this is fixed and can never change. This is more memory efficient but also adds complications in terms of memory handling in languages like C. Dynamic languages abstract this for you.

### Cost of operations

* Adding to end of array - constant time
* Reading last element of array - constant time
* Insert at start of array - linear time
* Deleting at end of array - constant time
* Deleting at start of array - linear time
* Finding array element by value - linear time

## Optimising Algorithms 

### Quadratic Shuffle

A shuffle algorithm where efficiency can be improved. Algorithm is quadratic since it iterates through the array and performs a linear operation of delete at a specific index on each iteration.

```js
function quadraticShuffle (array) {
  const newArray = []
  while (true) {
    const random = Math.floor(Math.random() * array.length)
    const el = array.splice(random, 1)[0]
    newArray.push(el)
    if (array.length === 0) { break }
  }
  return newArray
}
```

![quadratic-shuffle-graph](images/quadratic-shuffle-graph.png)

### Optimising Quadratic Shuffle Algorithm

To improve the algorithm, instead of deleting from the middle of the array, we can swap it with the last element before deleting it, substituting a linear operation with a constant one. The result is a much faster more efficient algorithm, with linear complexity.

```js
function linearShuffle (array) {
  const newArray = []
  while (array.length > 0) {
    const random = Math.floor(Math.random() * array.length)
    const el = array[random]
    newArray.push(el)
    array[random] = array[array.length - 1]
    array[array.length - 1] = el
    array.pop()
  }
  return newArray
}
```

![linear-shuffle](images/linear-shuffle-graph.png)

### Quadratic Reverse

The algorithm is quadratic, due to inserting at the start of an array - a linear operation - on every iteration

```js
function quadraticReverse (arr) {
  const newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.unshift(arr[i])
  }
  return newArr
}
```

![quadratic-reverse-graph](images/quadratic-reverse-graph.png)

### Optimising Quadratic Reverse Algorithm

To optimise this algorithm I simply replaced the unshift with a push, so that elements are inserted to the end of the array instead of the beginning, and iterated through the original array backwards. This replaces a linear operation with a constant one, resulting in a much more efficient algorithm with overall linear complexity.

```js
function linearReverse (arr) {
  const newArr = []
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i])
  }
  return newArr
}
```

![linear-reverse-graph](images/linear-reverse-graph.png)

## Data Structures

Ways to store data in Memory. Can be optimised for different use cases. E.g. arrays and lists are ordered. Hashes have faster lookup times. etc.

### Different Data Structures

* Array / List
* Object
* Hash / Dictionary
* Set / Hashtable
* Tuple
* Linked List
* Tree
* Trie
* Graph
* Queue
* Stack

### Exercise

Lookup times in arrays are linear. Design a data structure so that it's lookup time will be constant.

### Solutions

#### Solution 1

Element stored in memory index corresponding to its value:

```js
// store
memory[value] = value

// find
memory[value]

// delete
memory[value] = nil
```

Improvements on array: constant look up and delete

Trade-offs: unordered, possible collisions, can't store duplicates, difficult to store very large numbers

#### Solution 2

Element stored at index == (value % length of memory allocation)

```js
// store
memory[value % memory.length] = value

// find
memory[value % memory.length]

// delete
memory[value % memory.length] = nil

// example - memory length = 15
// store the number 2:
memory.length == 15

2 % 15 = 2

memory[2] = 2
```

Improvements on solution 1: still constant look up and delete, more memory efficient - can store bigger numbers

Trade-offs: still unordered, collisions possible

#### Solution 3

Each memory index is either nil or links to an array of up to 5 elements

element stored in array, which is stored at memory index == value % memory length
colliding numbers are stored in the array
to find value, go to correspondning index and iterate through the array.

```js
// store
memory[value % memory.length].push(value)

// find
array = memory[value % memory.length]

array.filter(element => element === value)[0]

// delete
array = memory[value % memory.length]

newArray.filter(element => element !== value)

memory[value % memory.length] = newArray

// example - memory length = 15
// store the numbers 2 and 17:
memory.length == 15

2 % 15 = 2
memory[2] = [2]

17 % 15 = 2
memory[2] = [2, 17]
```

Improvements on solution 2: still constant look up and delete, since only have to iterate through 5 numbers max, less chance of collisions, can store more numbers

Trade-offs: still unordered, collisions still possible, even if less frequent

### Hash Table

Same as solution 3, but re-map anytime you get too many collisions - i.e. double the memory allocation (and maybe + 1 to change the modulo and reduce the collisions)

- Different to a hash map or a dictionary - does not use key value pairs
- Collection of values only
- Very quick operations - constant add, delete and find
- No duplicates
- No order

#### Hash / Hashmap / Dictionary

**Hashes** and **Dictionaries** are also based on hash tables, but instead of storing values, they store keys which point to values. Uses the same data structure as a hash table to store the keys - arrays of keys stored at value % mem.length, remapping to make more space when collisions occur.

- Look up by key is constant time
- Look up by value is linear since it has to loop through every key

Limitations of current structure - storing non numeric values

## Linear find duplicates

By applying the techniques above, I designed a new find duplicates algorithm with linear complexity instead of quadratic. The improved the efficiency of the algorithm comes from using a set instead of an array to store the elements and check for duplication. The set is constant time to check the presence of an element, as opposed to linear with an array, reducing the overall algorithmic complexity from quadratic to linear.

[Algorithm](https://github.com/AJ8GH/algorithmic-complexity/blob/main/algorithms/lib/linearFindDuplicates.js)

![linear-find-duplicates-graph](images/linear-find-duplicates-graph.png)
