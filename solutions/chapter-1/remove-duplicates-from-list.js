const removeDuplicatesFromArray = (a) => {
    const setArr = new Set(a);
    return [...setArr];
}

console.log(removeDuplicatesFromArray([1])); // => [1]
console.log(removeDuplicatesFromArray([1, 2])); // => [1, 2]
console.log(removeDuplicatesFromArray([1, 1, 2])); // => [1, 2]
