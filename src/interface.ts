interface Laptop {
    name: string;
    on(): void;
    off(): void;
}


class Asus implements Laptop {
    name: string;
    isGamming: boolean;
    constructor(name: string, isGamming: boolean = false) {
        this.name = name;
        this.isGamming = isGamming;
    }
    on(): void{
        console.log("Laptop Asus Dinyalakan")
    }
    off(): void{
        console.log("Laptop Asus Dimatikan")
    }
}

class Macbook implements Laptop {
    name: string = "Macbook"
    keyboardLight: boolean = true;
    constructor(name: string, keyboardLight: boolean = true) {
        this.name = name;
        this.keyboardLight = keyboardLight;
    }
    on(): void {
        console.log('Laptop Macbook Dinyalakan')
    }
    off(): void {
        console.log('Laptop Macbook Dimatikan')
    }   
}

let asus = new Asus('ROG', true)

asus.on()
console.log('gaming', asus.isGamming)
asus.off()

let m1 = new Macbook('M1')
console.log(m1)
m1.on()