const getDifferentParityIndex = (numbersStr) => {
    const numbers = numbersStr.split(' ');
    const isFirstOdd = !!(numbers[0] % 2);
    let isCurrentOdd = !!(numbers[1] % 2);
    let isNextOdd = !!(numbers[2] % 2);

    if (isFirstOdd !== isCurrentOdd && isCurrentOdd === isNextOdd) {
        return 1;
    }

    for (let i = 1; i < numbers.length; i++) {
        isCurrentOdd = !!(numbers[i] % 2);

        if (isCurrentOdd !== isFirstOdd) {
            return i + 1;
        }
    }
}

test(getDifferentParityIndex("6 8 7 2 10 12 14"), 3);
test(getDifferentParityIndex("1 2 3 5 7"), 2);
test(getDifferentParityIndex("2 1 1 1"), 1);
test(getDifferentParityIndex("1 1 1 2"), 4);
test(getDifferentParityIndex("1 1 2"), 3);
test(getDifferentParityIndex("2 1 1"), 1);

/*
Though in some cases we might need not so efficient solution,
but more readable.

Get remainders first (in our case the value will be either 0 even or 1 odd).
If sum > 1 - the count of odd numbers is > 1 too, so we need the even.
Otherwise return odd.
*/
const getDifferentParityIndexReadable = (numbersStr) => {
    const remainders = numbersStr.split(' ').map(number => number % 2);
    const remaindersSum = remainders.reduce((acc, number) => acc + number);
    const targetItem = remaindersSum > 1 ? 0 : 1;
  
    return remainders.indexOf(targetItem) + 1;
}

test(getDifferentParityIndexReadable("6 8 7 2 10 12 14"), 3);
test(getDifferentParityIndexReadable("1 2 3 5 7"), 2);
test(getDifferentParityIndexReadable("2 1 1 1"), 1);
test(getDifferentParityIndexReadable("1 1 1 2"), 4);
test(getDifferentParityIndexReadable("1 1 2"), 3);
test(getDifferentParityIndexReadable("2 1 1"), 1);