## Notes on timing code

### Do not include set up and teardown

There are several phases to timing code.

Make sure you are only timing the part of the code that you need to be timing.

Any set up code, like creating an array, or shuffling it, should be done **before** you start the timer.

Similarly, end the timer just after the code you are timing.

### Use a linear scale

For graphs, make sure you use linear scales. That is, the numbers on each axis should grow regularly, with spacing between numbers accurately representing the difference between them.

The easiest way to do this is to use sample sizes that increase in regular steps (e.g. 5000, 10000, 15000, 20000, 25000, ...).

### Is your first result always very high?

This is normal. [Here's an article](http://engineering.appfolio.com/appfolio-engineering/2017/5/2/what-about-warmup) that explains why this is the case. It is written for ruby, but similar reasons apply for any language.

A simple solution to this it to just run a few warm up rounds. That could be as little as 10 throwaway iterations, but you can experiment with different numbers.

### Are your times very irregular?

Some differences in timing is OK.
However, if the graphs you obtain looks very jagged, you might be able to make them a little smoother using the following methods.

#### Quit all other apps

Applications running at the same time are competing for CPU.
At any point, the OS could choose to pause your programme and prioritise another, before continuing it.
Closing all other running apps should be the first thing you try to solve unstable results.

#### Use bigger arrays (> 5000 elements)

Bigger arrays usually take more time to process, which means small  irregularities should be less visible.
This is valid for any non *constant time* method.

#### Use the average time

Run your timing code many times, and use the average running time as the final number. Anywhere between 20 to 100 times feel reasonable.

#### Remove outliers

For any reason - usually something else was given priority on the CPU - some results might present large irregularities. If that is the case, even an average could be thrown off by these results.

A good practice when averaging is to throw away the 5% top and bottom results. You could also use the median time as an alternative.

### Adapt the timing to the function you are timing

#### Time the worst case

When timing a function to study its complexity, you want to use the worst case input, to know how your algorithm will work in the worst conditions. That may mean adapting your input to make it more specific to the function you are running. For example, if you are timing a function that finds out whether an array contains duplicates, and the input array is only made up of numbers from one to ten, then as long as the array is more than 10 numbers, the function will always return true. Which means it could take constant time, even for huge arrays. But this is not representative of how many steps or operation the function would take in the worst case.

So if you ever find yourself with a constant time graph, when the code looks like it should be linear, think about whether you are giving it the worst case.

#### Adapt the number of results

Some functions will be faster than others. If a function is really fast, then you may want to increase the size of your input, so that you can still see a shape on the graph, and you do not loose any precision.

### Are your results all other the place

If the numbers do not seem to form a specific shape, but they are all very low (code runs very fast, 2 or 3 ms per call), then you may just be looking at a constant time graph. Constant time just means it never takes longer than a given time, even when the input is huge.

### Example results

Here's an example of data you could get from timing the `.reverse` function:

| Array size | Reverse |
|---|---|
| 50000 | 423957 |
| 100000 | 843154 |
| 150000 | 1539546 |
| 200000 | 2159364 |
| 250000 | 2345663 |
| 300000 | 2793011 |
| 350000 | 3965296 |
| 400000 | 3789834 |
| 450000 | 4217247 |
| 500000 | 4820949 |
| 550000 | 6027154 |
| 600000 | 6208695 |
| 650000 | 6595183 |
| 700000 | 7032598 |
| 750000 | 7094493 |
| 800000 | 8017191 |
| 850000 | 8240341 |
| 900000 | 8616818 |
| 950000 | 8898244 |
| 1000000 | 9586477 |

And here's the corresponding graph:

![linear graph for the reverse function](./img/reverse_graph.png)
