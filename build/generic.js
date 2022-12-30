"use strict";
function getData(value) {
    return value;
}
console.log(getData('Supriatna'));
console.log(getData(1234));
// Generic Type
function myData(value) {
    return value;
}
console.log(myData('Supriatna').length);
console.log(myData(1234));
const arrowFunc = (value) => {
};
