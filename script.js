let shopingList = [
    { name: "eggs", count: 10, done: false },
    { name: "apple", count: 3, done: false },
    { name: "milk", count: 1, done: false },
    { name: "desert", count: 2, done: false }
];

function addProducts(name, count) {
    shopingList.push({ name: name, count: count, done: false });
}
addProducts("butter", 1);
addProducts("book", 2);
addProducts("coffee", 1);
console.log(shopingList)


function listDone(itemName) {
    for (let i = 0; i < shopingList.length; i++) {
        let product = shopingList[i];
        if (product.name === itemName) {
            product.done = true;
        }
    }
}

listDone('book');
listDone('milk');
listDone('eggs');
console.log(shopingList)

function printList() {

    for (let i = 0; i < shopingList.length; i++) {
        let product = shopingList[i];

        if (product.done) {
            console.log(`✅ ${product.name} (${product.count} шт.) - Куплено`);
        } else {
            console.log(`🛒 ${product.name} (${product.count} шт.) - Не куплено`);
        }
    }
}

printList()