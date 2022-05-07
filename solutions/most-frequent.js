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

