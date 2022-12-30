function getData(value : any) {
    return value;
}

console.log(getData('Supriatna'))
console.log(getData(1234))

// Generic Type

function myData<T>(value: T) {
    return value;
}

console.log(myData('Supriatna').length)
console.log(myData(1234))

const arrowFunc = <T, >(value: T) => {

}