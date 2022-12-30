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
    constructor(phone, name, age) {
        super(name, age);
        this.read = true;
        this.write = true;
        this._email = "";
        this.phone = phone;
    }
    getRole() {
        return {
            read: this.read,
            write: this.write
        };
    }
    set email(value) {
        if (value.length < 5) {
            this._email = 'Email Salah';
        }
        else {
            this._email = value;
        }
    }
    get email() {
        return this._email;
    }
}
let admin1 = new Admin('085223', 'Supri', 20);
console.log(admin1);
admin1.setName('Zenk');
console.log(admin1.getName());
admin1.email = 'supri@gmail.com';
console.log(admin1.email);
