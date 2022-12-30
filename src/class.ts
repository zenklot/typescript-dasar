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
    private _email: string = "";
    static getRoleName : string = "Admin";

    constructor(phone: string, name: string, age: number) {
        super(name, age);
        this.phone = phone;
    }

    static getNameRole() {
        return "Hai ADMIN"
    }

    getRole(): { read: boolean; write: boolean} {
        return {
            read: this.read,
            write: this.write
        }
    }
    set email(value: string) {
        if(value.length < 5) {
            this._email = 'Email Salah'
        }else{
            this._email = value;
        }
    }
    get email() : string {
        return this._email;
    }
}

let admin1 = new Admin('085223','Supri', 20)

console.log(admin1)
admin1.setName('Zenk')
console.log(admin1.getName())

admin1.email = 'supri@gmail.com'
console.log(admin1.email)


let admin2 = Admin.getRoleName
console.log('RoleName : ', admin2)
let admin3 = Admin.getNameRole()
console.log('RoleName : ', admin3)