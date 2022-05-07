# My collection of solutions
<details>
<summary>14 - In the office at the same time</summary>

<b>-- HOW IT WORKS --</b>
1. Create an array with all the enter or leaving times
2. Sort entries (when the time is the same, leaving comes first)
3. Iterate over the sorted data increase counter if is leaving and decrease if is leaving
4. Compare each item with current maximum

<b>-- CORRECTNESS --</b>
- the algorithm goes through each entry, changes the current count and checks the current maximum

<b>-- TIME COMPLEXITY --</b>
- `O(n)` to create an array with entries
- `O(n*logn)` takes to sort the items
- `O(n)` to iterate over sorted entries
- so overall the max time is for sorting - `O(n*logn)`

<b>-- MEMORY CONSUMPTION --</b>
- it takes `O(n)` to create an array of entries

- [View my Solution](./solutions/office-same-time.js)

</details>

<details>
<summary>14 - Parenthesis (hard)</summary>

<b>-- HOW IT WORKS --</b>
1. Create a stack, add to stack if the parenthesis opens.
2. Remove if closes and check if opening matches closing.
3. If there is not enough opening parenthesis or opening doesn't match closing - return false, otherwise true.

<b>-- CORRECTNESS --</b>
- The algorithm adds only the opening parenthesis to the stack and removes when meets the closing one at the same level with additional check of parenthesis type.
- So even if the closing comes first or pairs don't match, the algorithm returns false.

<b>-- TIME COMPLEXITY --</b>
- In worst case scenario the algorithm iterates over all values, so it takes `O(n)` time.

<b>-- MEMORY CONSUMPTION --</b>
- Additional memory is used to create a stack - `O(n)`.

- [View my Solution](./solutions/parenthesis-hard.js)

</details>

<details>
<summary>13 - Delaying decorator</summary>

- [View my Solution](./solutions/delaying-decorator.js)
- [Try on JS Info](https://javascript.info/call-apply-decorators#delaying-decorator)

</details>

<details>
<summary>12 - Spy decorator</summary>

- [View my Solution](./solutions/spy-decorator.js)
- [Try on JS Info](https://javascript.info/call-apply-decorators#spy-decorator)

</details>

<details>
<summary>11 - Parenthesis (easy)</summary>

<b>-- HOW IT WORKS --</b>
1. Create a stack, add to stack if the parenthesis opens, remove if closes.
2. If there is not enough opening parenthesis - return false, otherwise true.

<b>-- CORRECTNESS --</b>
- The algorithm adds only the opening parenthesis to the stack and removes when meets the closing one at the same level.
- So even if the closing comes first, the algorithm returns false.

<b>-- TIME COMPLEXITY --</b>
- In worst case scenario the algorithm iterates over all values, so it takes `O(n)` time.

<b>-- MEMORY CONSUMPTION --</b>
- Additional memory is used to create a stack - `O(n)`.

- [View my Solution](./solutions/parenthesis-easy.js)

</details>

<details>
<summary>10 - Find the one number with different parity</summary>

<b>-- HOW IT WORKS --</b>
1. Convert a string to an array.
2. Check for the case when the first item is what we are looking for.
3. If the result is not the first item, iterate over an array of numbers until the item is found.

<b>-- CORRECTNESS --</b>
- The algorithm compares each value parity to the first one and when it finds the different parity, returns an index.

<b>-- TIME COMPLEXITY --</b>
- To iterate over an array takes `O(n)` time.

<b>-- MEMORY CONSUMPTION --</b>
- Additional memory is used to store the array of numbers - `O(n)`.

- [View my Solution](./solutions/different-parity.js)

</details>

<details>
<summary>9 - Find how many times the most frequent element is repeated in 2 asc sorted arrays</summary>

<b>-- HOW IT WORKS --</b>
1. Unite 2 arrays by copying all the values from 2 arrays into one.
2. Count frequency, stored in an associative array where the key is unique value from united array, the value is counter.
3. Create an array of counters and get the max value.

<b>-- CORRECTNESS --</b>
- The algorithm iterates over each value and stores the count and increases it each time when the value repeats.

<b>-- TIME COMPLEXITY --</b>
- To copy an array, to store the counts, to find max - iterate over each element `O(n)`.
- So the overall complexity is `O(n)`.

<b>-- MEMORY CONSUMPTION --</b>
- Additional memory is used to store the united array - `O(n)`.
- And to store the counters - less than `O(n)`.
- So the overall consumption is `O(n)`.

- [View my Solution](./solutions/most-frequent.js)

</details>

<details>
<summary>8 - Find index if the value in the list of things</summary>

- [View my Solution](./solutions/find-item.js)

</details>

<details>
<summary>7 - Remove the item from the list of things</summary>

- [View my Solution](./solutions/remove-from-list.js)

</details>

<details>
<summary>6 - Print the list of things</summary>

- [View my Solution](./solutions/list-of-things.js)

</details>

<details>
<summary>5 - Transpose the matrix</summary>

- [View my Solution](./solutions/matrix.js)

</details>

<details>
<summary>4 - Write a function y = ax^2 + bx + c</summary>

- [View my Solution](./solutions/quadratic-equation.js)

</details>

<details>
<summary>3 - Century From Year</summary>

- [View my Solution](./solutions/century-from-year.js)
- [Try on Codewars](https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097)

</details>

<details>
<summary>2 - Remove Duplicates From List</summary>

- [View my Solution](./solutions/remove-duplicates-from-list.js)
- [Try on Codewars](https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118)

</details>

<details>
<summary>1 - Count Odd Numbers Below n</summary>

- [View my Solution](./solutions/count-odd-numbers-below-n.js)
- [Try on Codewars](https://www.codewars.com/kata/59342039eb450e39970000a6)

</details>