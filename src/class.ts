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
}

let pengguna = new Pengguna('Zenklot', 16)

console.log(pengguna)