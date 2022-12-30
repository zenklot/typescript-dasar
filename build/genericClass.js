"use strict";
class List {
    constructor(...elements) {
        this.data = elements;
    }
    add(element) {
        this.data.push(element);
    }
    addMultiple(...elements) {
        this.data.push(...elements);
    }
    getAll() {
        return this.data;
    }
}
let listAngka = new List(1, 2, 3, 4, 5);
listAngka.add(6);
listAngka.add(7);
listAngka.addMultiple(8, 9, 10, 11, 12);
console.log(listAngka.getAll());
let random = new List(1, "2", "A", 4);
random.add(5);
random.add(6);
random.addMultiple("7", "Mantap");
console.log(random.getAll());
