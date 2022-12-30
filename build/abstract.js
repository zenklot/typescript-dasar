"use strict";
class Kendaraan {
    start() {
        console.log("Kendaraan dinyalakan");
    }
}
class Mobil extends Kendaraan {
    constructor() {
        super(...arguments);
        this.roda = 4;
    }
}
class Motor extends Kendaraan {
    constructor() {
        super(...arguments);
        this.roda = 2;
    }
}
let mobil = new Mobil();
console.log("mobil", mobil);
mobil.start();
let motor = new Motor();
console.log("motor", motor);
motor.start();
