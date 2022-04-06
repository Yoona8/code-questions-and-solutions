/*
-- HOW IT WORKS --
Unite 2 arrays by copying all the values from 2 arrays into one.

Count frequency, stored in an associative array where the key is unique value from united array,
the value is counter.

Create an array of counters and get the max value.

-- CORRECTNESS --
The algorithm iterates over each value and stores the count and increases it
each time when the value repeats.

-- TIME COMPLEXITY --
To copy an array, to store the counts, to find max - iterate over each element O(n).
So the overall complexity is O(n).

-- MEMORY CONSUMPTION --
Additional memory is used to store the united array - O(n).
And to store the counters - less than O(n).
So the overall consumption is O(n).
*/
const countMostFrequent = (firstArray, secondArray) => {
  const unitedArray = [...firstArray, ...secondArray];
  const valueToCount = {};
  let maxFrequency = 0;

  unitedArray.forEach((number) => valueToCount[number] ? ++valueToCount[number] : 1);

  Object.values(valueToCount).forEach((frequency) => {
      if (frequency > maxFrequency) {
          maxFrequency = frequency;
      }
  });

  return maxFrequency;
};

test(countMostFrequent([7, 8, 9, 9], [0, 9, 10, 11], 3));
test(countMostFrequent([], [8, 8], 2));
test(countMostFrequent([1, 2, 3, 3, 3, 4], [], 3));

