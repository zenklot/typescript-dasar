// Enum
// Data Konstant Di Aplikasi

// Numeric Enum
enum Month {
    JAN,
    FEB,
    MAR,
    APR,
    MEI,
    JUN,
    JUL
}

console.log('First',Month)
console.log('Mei',Month.MEI)

enum Month2 {
    JAN = 1,
    FEB,
    MAR,
    APR,
    MEI,
    JUN,
    JUL
}

console.log('Second', Month2)
console.log('Mei',Month2.MEI)


// STRING ENUM
console.log('STRING ENUM')
enum Month3 {
    JAN = "JANUARI",
    FEB = "FEBRUARI",
    MAR = "MARET",
    APR = "APRIL",
    MEI = "MEI",
}

console.log('String', Month3)
console.log('FEB', Month3.FEB)