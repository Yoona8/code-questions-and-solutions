const getCentury = (year) => Math.ceil(year / 100);

console.log(getCentury(1705)); // => 18
console.log(getCentury(1900)); // => 19
console.log(getCentury(1601)); // => 17
console.log(getCentury(2000)); // => 20
