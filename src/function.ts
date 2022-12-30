// Type data pada balikan function

function getName(): string{
    return "Halo nama saya Supriatna"
}

console.log(getName())

function getAge() : number {
    return 16
}

console.log(getAge())

function printName(): void {
    console.log('print:', getName())
}

printName()


// Argument Type

function perkalian(val1 : number, val2: number) : number {
    return val1 * val2;
}

console.log(perkalian(10, 5))


// Function as Type
type Age = number;
let age: Age = 20;

type Tambah = (val1: number, val2: number) => number;

const add : Tambah = (val1: number, val2: number): number => {
    return val1 + val2;
}


// Default Argument
const fullName = (firstName: string, lastName: string = "Supriatna"): string  => {
    return firstName + ' ' + lastName;
}

console.log(fullName('Gozenx'))
console.log(fullName("Raisa", "Supri"))