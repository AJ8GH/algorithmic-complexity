Memory
======

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

## Arrays

When an array is stored, each element is stored consecutively. The length of the array is also stored. This is why finding the last element of an array is always constant time.

**Dynamic arrays:**

Ruby, JavaScript, Python, etc.

When storing a dynamic array, double the length is allocated, to allow for adding elements to array.

Once the limit is reached, the memory allocation is abandoned, and a new allocation is made, for double the new length.

**Static / primitive arrays:**

C, Java, etc.

When creating a static array, the size must be specified, this is fixed and can never change. This is more memory efficient but also adds complications in terms of memory handling in languages like C. Dynamic languages abstract this for you.

### Cost of operations

* Adding to end of array - constant time
* Reading last element of array - constant time
* Insert at start of array - linear time
* Deleting at end of array - constant time
* Deleting at start of array - linear time
* Finding array element by value - linear time

## Optimising Algorithms 

### Quadratic shuffle

```ruby
def shuffle(array)
    new_array = []
    until array.empty? do
        random_index = rand array.length
        new_array << array[random_index]
        array.delete_at(random_index)
    end
    new_array
end
```

`delete_at` - costly operation as it is linear within a loop.

Solution - use swap method:

```ruby
def shuffle(array)
    new_array = []
    until array.empty? do
        random_index = rand array.length
        new_array << array[random_index]
        array[random_index], array[-1] = array[-1], array[random_index]
        array.delete_at(random_index)
    end
    new_array
end
```

### Quadratic Reverse
```js
function reverse(arr) {
    new_arr = []
    for (let i = 0; i < arr.length; i++) {
        new_arr.unshift(arr[i])
    }
    return new_arr;
}
```
