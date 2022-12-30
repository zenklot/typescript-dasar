export class User {
    public name: string;

    constructor(name: string) { 
        this.name = name;
     }
}

let user = new User('Supri')

console.log(user)


export class Pengguna {
    constructor(public name: string, public age: number) {
        this.name = name;
        this.age = age;
    }
    setName(value: string) {
        this.name = value;
    }
    getName() : string { 
        return this.name;
    }
}

let pengguna = new Pengguna('Zenklot', 16)

console.log(pengguna)


// Pewarisan Inheritance

/*
Pengguna :
- Admin
- User
*/

class Admin extends Pengguna {
    read: boolean = true;
    write: boolean = true;
    phone: string;

    constructor(phone: string, name: string, age: number) {
        super(name, age);
        this.phone = phone;
    }
    getRole(): { read: boolean; write: boolean} {
        return {
            read: this.read,
            write: this.write
        }
    }
}

let admin1 = new Admin('085223','Supri', 20)

console.log(admin1)
admin1.setName('Zenk')
console.log(admin1.getName())


