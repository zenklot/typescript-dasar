abstract class Kendaraan {
    abstract roda: number;

    start(): void{
        console.log("Kendaraan dinyalakan");
    }
}


class Mobil extends Kendaraan {
    roda: number = 4;
}

class Motor extends Kendaraan {
    roda: number = 2;
}

let mobil = new Mobil();

console.log("mobil", mobil)
mobil.start();

let motor = new Motor();
console.log("motor", motor)
motor.start();