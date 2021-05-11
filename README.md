# Algorithmic Complexity

This course focuses on an aspect of Computer Science that is relished by many developers, called algorithmic complexity.

This is the part of computer science that deals with how efficient programmes are. We will also take a deeper look at how programmes interact with memory, and how to use that to make our own programmes faster.

## Learning objectives

By the end of this course, the goal is to be able to answer "yes" to these questions:

* **Can you mention efficiency as one of the dimension of a good piece of code**
* **Can you join a conversation about algorithms and their complexity?**

## Overview of the course

* You'll work either individually or in teams of 2 and 3.
* You can use any programming language.
* You'll create a framework to time different algorithms and compare their efficiency
* You'll write your own algorithms, trying to be as efficient as possible
* There are workshops throughout to unblock parts of the problem and help you get further.

The workshops have all been recorded and can be found in this [YouTube playlist](https://www.youtube.com/playlist?list=PLc4BYny7PXeSNl4uAOiDIbgX6GumDDqPC). It's best to only watch the next one once you've started the work, so I'll detail which one to watch and when underneath.

## Sequence

### Intro to algorithmic complexity

Watch the video here: https://www.youtube.com/watch?v=riIds-Ggvak&list=PLc4BYny7PXeSNl4uAOiDIbgX6GumDDqPC&index=1

### Timing code

To start, let's look at how fast some standard library functions run. Here are four different ones you could be looking at (these are names of functions in ruby, but you can easily find equivalent in other languages):
* `last`
* `reverse`
* `shuffle`
* `sort` (if you are generating an array from a range, don't forget to shuffle it first to not bias the results)

- [ ] Create some code that returns the time needed to execute a function.
- [ ] What if you make the array passed into the functions 10, 100, 1000, 10000 times bigger?
- [ ] In order to get further, we'll need to create graphs to compare different pieces of code. You will transform your code into a _timing framework_. It should:
  - Create arrays of different sizes (try 5000 to 100<nbsp>000 in steps of 5000)
  - Run the code to time on each
  - Print the size and corresponding time.
- [ ] From there, you should use a spreadsheet utility to plot the results into a curve (time spent over input size).

For more pointers on how to time code, here's a more [detailed document](./timing_code.md). It also addresses a few of the common problems you may experience.

### Build your own algorithms

Now, let's look at efficiency for our own algorithms.
Here is [a list of algorithms](./exercises.md) for you to implement.

**It is strongly encouraged here to try to come up with your own take on these algorithms, and not simply research how to write them online.**

For now, we are not concerned with making them efficient.

For each algorithm you write, you should:
- [ ] Write a few tests (covering different cases)
- [ ] Implement them
- [ ] Run your timing framework
- [ ] Plot their curves

Once you have written a few, compare the shapes of different curves.
- [ ] How can you characterise the complexity of different algorithms?
- [ ] Which algorithms are more efficient?

**Resources**:

* [A workshop about algorithm design](https://github.com/makersacademy/skills-workshops/tree/master/algorithmic_complexity/writing-algorithms)
* Watch the video recording of the workshop here: https://www.youtube.com/watch?v=uclAQBy1Epc&list=PLc4BYny7PXeSNl4uAOiDIbgX6GumDDqPC&index=2

### Making algorithms more efficient

Can you make your algorithms more efficient?

Making algorithms more efficient is all about making them execute less steps.

Here are two leads to start reducing the number of steps:

#### 1. Know your data structures.

Common operations might be more expensive than you think. By checking how different structures (arrays, hashtables…)  work in memory, you’ll be able to save on simple operations.

There are two workshops supporting this topic.
* Watch the first one once you have written some algorithms for shuffle and reverse: https://www.youtube.com/watch?v=Vc8kuSBouPA&list=PLc4BYny7PXeSNl4uAOiDIbgX6GumDDqPC&index=3
* Watch the second one once you have improved your initial algorithms and written some code for find duplicates: https://www.youtube.com/watch?v=osPEozXe4JY&list=PLc4BYny7PXeSNl4uAOiDIbgX6GumDDqPC&index=4

**Resources**:
* [Here’s a table that shows the cost of operations on different data structures](https://en.wikipedia.org/wiki/Dynamic_array#Performance)
* [Arrays](https://www.interviewcake.com/concept/python/array?) and [Dynamic Arrays](https://www.interviewcake.com/concept/python/dynamic-array)
* [More on hashtables](https://www.interviewcake.com/concept/java/hash-map)
* [Introduction to ruby hashes (an example of hash tables)](https://launchschool.com/blog/how-the-hash-works-in-ruby
)
* [An explanation of hashtables that has you build one in ruby](https://www.rubyguides.com/2017/02/hash-tables-explained/)

- [ ] Looking at your less efficient algorithms, can you spot operations that have a high hidden cost?
- [ ] Would some of your algorithms benefit from using a different data structure?
- [ ] Challenge yourself to write linear functions for _shuffling_, _reversing_, _find duplicates_, _most frequent words_ and _sorting 0s and 1s_

Here is a [practical](https://github.com/makersacademy/skills-workshops/blob/master/week-10-apprs/make_algorithms_faster_practical.md) to practice spotting hidden cost and making algorithms faster.

#### 2. Change the structure of your algorithm

Notice parts of your algorithm that repeat the same operations on the same elements. Is there a way you can only do these operations once?

There are as many ways to do this as there are problems. However, one common technique which is useful to know about is **divide & conquer**. This is a technique by which you reduce a problem to several smaller problems, which in turn can be reduced to several smaller problems and so on, until the problems are so small they become trivial to solve. Implementing this will often include recursion - but that is not necessary.

Efficient sorting algorithm will usually use this principle to be made faster.

The last workshop of the playlist touches on these topics. Watch here: https://www.youtube.com/watch?v=ObkYFDoIKwI&list=PLc4BYny7PXeSNl4uAOiDIbgX6GumDDqPC&index=5

**Resources**:
* [Divide and conquer algorithm](https://en.wikipedia.org/wiki/Divide_and_conquer_algorithm) on Wikipedia
* [Recursion Demystified](https://medium.freecodecamp.org/recursion-demystified-99a2105cb871)

- [ ] Can you use this to make you sorting algorithm faster?

#### Optimising:

Optimising is trying to make algorithms more efficient in some specific cases. If you know something about your input, you could apply an algorithm that uses that knowledge to its advantage (for example in the case of sorting only 0s and 1s).

Some other times, you do not know things about the specific input, but you know things about the typical inputs that you are given. For example, you might approach _Most frequent words_ differently if you know the text will be in English or if you have no idea which language it will be in.

Lastly, optimising storage means using a data-structure that will be most efficient for the most frequent usage you'll make of it. A real life example would be to place the kitchen utensils you use most in the top drawer and the ones you only use a few times a year hidden on the top shelve.
In software, your usage of memory can be optimised in the same way if you know which elements you'll need to access most often.

- [ ] Can you think of some optimisations you could make for your algorithms?

### Big O Notations

- [ ] Why is timing not the best solution to look at code efficiency?

#### Counting Steps
An other way to look at efficiency would be to look at how many *operations* or *instructions* are executed in the programme.
- [ ] How could you track how many steps there are in your algorithm?
- [ ] Add step counters on some of the algorithms above, and compare the curves obtained for time vs steps.
- [ ] Do the shapes differ? Why?

#### A theoretical model for Complexity
Using some of the given resources, describe the curves you obtained in terms of Big O notations:

* [Curves and corresponding BigO Notations](http://science.slc.edu/~jmarshall/courses/2002/spring/cs50/BigO/)

- [ ] What do these notations mean?
- [ ] Can you characterise your algorithms into *logarithmic*, *linear*, *quadratic*, *cubic* or *exponential* complexity?

### Going further

In this project, we talked about time complexity, but what about space complexity? Space complexity looks at how much memory a programme takes, and how that memory usage scales.
Some programmes could be very time efficient, but allocate tons of memory.

- [ ] Which steps in your algorithms take up a lot of memory?
- [ ] How could you track how much memory your algorithms take?
- [ ] Could you write your algorithms so that they use less memory?

### Additional resources

* [A video introducing algorithmic efficiency](https://www.youtube.com/watch?v=u2iHB2vv3iE)
* [An online guide to big O notation and complexity](https://www.interviewcake.com/article/python/big-o-notation-time-and-space-complexity?)
* [A podcast about algorithmic complexity, with some great notes](https://www.codingblocks.net/podcast/what-is-algorithmic-complexity/)
* [An article going about guessing complexity from looking at the code](https://developerinsider.co/big-o-notation-explained-with-examples/amp/)
* [The Imposter's Handbook - A book explaining CS concept for self-taught programmers](https://bigmachine.io/products/the-imposters-handbook/)
* [Grokking Algorithms - An illustrated book, fully available online](https://www.manning.com/books/grokking-algorithms?)

* A few projects done by previous cohort members that you can check:
  * https://github.com/DamoH/algorithmic-complexity (some Ruby and Java)
  * https://github.com/AlexDresco/algorithm (Java)
  * https://github.com/fbl11/makers-week-10 (Java)
  * https://github.com/ClareJolly/algorithmic-complexity (JavaScript)
  * https://github.com/Tolvic/algorithmic-complexity (C#)
  * https://github.com/PreetiSekhon2/algorithms (Python)
  * https://github.com/tomlightfoot/algorithm_complexity (JavaScript)
