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
    setName(value) {
        this.name = value;
    }
    getName() {
        return this.name;
    }
}
exports.Pengguna = Pengguna;
let pengguna = new Pengguna('Zenklot', 16);
console.log(pengguna);
// Pewarisan Inheritance
/*
Pengguna :
- Admin
- User
*/
class Admin extends Pengguna {
    constructor() {
        super(...arguments);
        this.read = true;
        this.write = true;
    }
    getRole() {
        return {
            read: this.read,
            write: this.write
        };
    }
}
let admin1 = new Admin('Supri', 20);
console.log(admin1);
admin1.setName('Zenk');
console.log(admin1.getName());
