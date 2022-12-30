"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pengguna = exports.User = void 0;
class User {
    constructor(name) {
        this.name = name;
    }
}
exports.User = User;
let user = new User('Supri');
console.log(user);
class Pengguna {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
}
exports.Pengguna = Pengguna;
let pengguna = new Pengguna('Zenklot', 16);
console.log(pengguna);
