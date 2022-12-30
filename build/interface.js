"use strict";
class Asus {
    constructor(name, isGamming = false) {
        this.name = name;
        this.isGamming = isGamming;
    }
    on() {
        console.log("Laptop Asus Dinyalakan");
    }
    off() {
        console.log("Laptop Asus Dimatikan");
    }
}
class Macbook {
    constructor(name, keyboardLight = true) {
        this.name = "Macbook";
        this.keyboardLight = true;
        this.name = name;
        this.keyboardLight = keyboardLight;
    }
    on() {
        console.log('Laptop Macbook Dinyalakan');
    }
    off() {
        console.log('Laptop Macbook Dimatikan');
    }
}
let asus = new Asus('ROG', true);
asus.on();
console.log('gaming', asus.isGamming);
asus.off();
let m1 = new Macbook('M1');
console.log(m1);
m1.on();
