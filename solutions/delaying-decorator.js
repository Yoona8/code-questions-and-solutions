const delayingDecorator = (func, ms) => {
    return function() {
        setTimeout(() => func.apply(this, arguments), ms);
    };
};

function printMessage(message) {
    console.log(message);
}
  
const printMessage3000 = delayingDecorator(printMessage, 3000);

printMessage3000('hello');