class Item {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

function removeItem(node, index) {
    let currentNode = node;
    let previousNode;

    if (index === 0) {
        return currentNode.next;
    }

    while (index) {
        if (index === 1) {
            previousNode = currentNode;
        }

        currentNode = currentNode.next;
        index--;
    }

    previousNode.next = currentNode.next;
    return node;
}

const kiwi = new Item('kiwi');
const potato = new Item('potato', kiwi);
const cinnamon = new Item('cinnamon', potato);
const orange = new Item('orange', cinnamon);
const banana = new Item('banana', orange);
const apple = new Item('apple', banana);
const listOfItems = new Item('carrot', apple);

// => return head
console.log(removeItem(listOfItems, 0));