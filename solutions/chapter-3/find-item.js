class Item {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

function solution(node, value) {
    let currentNode = node;
    let index = 0;

    while (currentNode) {
        if (currentNode.value === value) {
            return index;
        }

        currentNode = currentNode.next;
        index++;
    }

    return -1;
}

const kiwi = new Item('kiwi');
const potato = new Item('potato', kiwi);
const cinnamon = new Item('cinnamon', potato);
const orange = new Item('orange', cinnamon);
const banana = new Item('banana', orange);
const apple = new Item('apple', banana);
const listOfItems = new Item('carrot', apple);

// => 5
console.log(solution(listOfItems, 'potato'));

// => 0
console.log(solution(listOfItems, 'carrot'));

// => -1
console.log(solution(listOfItems, 'green'));
