"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Keyboard_1 = require("./Keyboard");
class BaseLaptop {
    constructor(name, type, numeric, touch) {
        this.name = name;
        this.type = type;
        this.withNumeric = numeric;
        this.withTouchButton = touch;
    }
    a() {
        console.log((0, Keyboard_1.a)());
    }
    b() {
        console.log((0, Keyboard_1.b)());
    }
}
exports.default = BaseLaptop;
