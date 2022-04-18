const spyDecorator = (func) => {
    function wrapper(...args) {
        const result = func.apply(this, args);

        wrapper.calls.push(args);
        return result;
    };

    wrapper.calls = [];
    return wrapper;
};

function sumNumbers(a, b) {
    return a + b;
}

sumNumbers = spyDecorator(sumNumbers);
console.log(sumNumbers(1, 2));
console.log(sumNumbers(4, 7));

for (let args of sumNumbers.calls) {
    console.log(`call: ${args.join(', ')}`);
}