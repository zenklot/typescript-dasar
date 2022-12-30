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