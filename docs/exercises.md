# Algorithms to train on

Here are algorithms you may want to implement.

## Shuffling
Implement your own algorithm for shuffling (you cannot use `.shuffle`).

## Reversing
Implement your own algorithm for reversing an array (you cannot use `.reverse`).

## Find Duplicates
Given a list of words, find all words that appear more than once.

## Most frequent words
Given a list of words, find which are the two most common words.

## Sorting 0s and 1s
Given an array containing only 0s and 1s, sort it.

## Sorting
Implement your own algorithm for sorting an array (you cannot use `.sort`).

## Fibonacci
Create a function that takes a number N and returns an array of the first N numbers in the [Fibonacci sequence](https://www.mathsisfun.com/numbers/fibonacci-sequence.html).

For example:

| N | expected return |
|-------|--------|
|`0`| `[]`|
|`3`|`[0, 1, 1]`|
|`10`|`[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]`|

## Mechacoach Pairing
Given a list of students names, create all possible pairings.

For example, if you give it the following list of names: `["Alice", "Bob", "Charly", "Dan"]` it should return something like:

```rb
[
    [["Alice", "Bob"], ["Charly", "Dan"]], # pairing for day 1
    [["Alice", "Charly"], ["Bob" , "Dan"]], # pairing for day 2
    [["Alice", "Dan"], ["Bob" , "Charly"]], # pairing for day 3
]
```

## Sub-sequence sum
Given an array of integers and a target number, find if there exist a sequence of numbers that sum up to the target.

For example:

| array | target | expected return |
|-------|--------|--------------|
|`[10,3,1,7]`|`8`| should return `true` (because 1+7 = 8) |
|`[10,3,1,7]`|`10`| should return `true` (because 10 is in the array) |
|`[10,3,1,7]`|`21`| should return `true` (because the sum of the whole array return 21) |
|`[10,3,1,7]`|`22`| should return `false` (because you can't reach 22 by summing all numbers) |
|`[10,3,1,7]`|`17`| should return `false` (because 10 and 7 are not next to each other) |
