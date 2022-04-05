class Item {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

function printItems(node) {
    let currentNode = node;

    while (currentNode) {
        console.log(currentNode.value);
        currentNode = currentNode.next;
    }
}

const kiwi = new Item('kiwi');
const potato = new Item('potato', kiwi);
const cinnamon = new Item('cinnamon', potato);
const orange = new Item('orange', cinnamon);
const banana = new Item('banana', orange);
const apple = new Item('apple', banana);
const listOfItems = new Item('carrot', apple);

// => carrot, apple, banana, orange, cinnamon, potato, kiwi
printItems(listOfItems);
