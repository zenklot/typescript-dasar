"use strict";
// Type data pada balikan function
function getName() {
    return "Halo nama saya Supriatna";
}
console.log(getName());
function getAge() {
    return 16;
}
console.log(getAge());
function printName() {
    console.log('print:', getName());
}
printName();
// Argument Type
function perkalian(val1, val2) {
    return val1 * val2;
}
console.log(perkalian(10, 5));
let age = 20;
const add = (val1, val2) => {
    return val1 + val2;
};
// Default Argument
const fullName = (firstName, lastName = "Supriatna") => {
    return firstName + ' ' + lastName;
};
console.log(fullName('Gozenx'));
console.log(fullName("Raisa", "Supri"));
// Optional Argument menggunakan ?
const getUmur = (val1, val2) => {
    return val1 + " " + val2 + " Tahun";
};
console.log(getUmur('Gozenx', '12'));
console.log(getUmur('20'));
