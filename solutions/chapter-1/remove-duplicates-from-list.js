const distinct = (a) => {
    const setArr = new Set(a);
    return [...setArr];
}

console.log(distinct([1])); // => [1]
console.log(distinct([1, 2])); // => [1, 2]
console.log(distinct([1, 1, 2])); // => [1, 2]
