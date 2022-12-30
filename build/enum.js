"use strict";
// Enum
// Data Konstant Di Aplikasi
// Numeric Enum
var Month;
(function (Month) {
    Month[Month["JAN"] = 0] = "JAN";
    Month[Month["FEB"] = 1] = "FEB";
    Month[Month["MAR"] = 2] = "MAR";
    Month[Month["APR"] = 3] = "APR";
    Month[Month["MEI"] = 4] = "MEI";
    Month[Month["JUN"] = 5] = "JUN";
    Month[Month["JUL"] = 6] = "JUL";
})(Month || (Month = {}));
console.log('First', Month);
console.log('Mei', Month.MEI);
var Month2;
(function (Month2) {
    Month2[Month2["JAN"] = 1] = "JAN";
    Month2[Month2["FEB"] = 2] = "FEB";
    Month2[Month2["MAR"] = 3] = "MAR";
    Month2[Month2["APR"] = 4] = "APR";
    Month2[Month2["MEI"] = 5] = "MEI";
    Month2[Month2["JUN"] = 6] = "JUN";
    Month2[Month2["JUL"] = 7] = "JUL";
})(Month2 || (Month2 = {}));
console.log('Second', Month2);
console.log('Mei', Month2.MEI);
// STRING ENUM
console.log('STRING ENUM');
var Month3;
(function (Month3) {
    Month3["JAN"] = "JANUARI";
    Month3["FEB"] = "FEBRUARI";
    Month3["MAR"] = "MARET";
    Month3["APR"] = "APRIL";
    Month3["MEI"] = "MEI";
})(Month3 || (Month3 = {}));
console.log('String', Month3);
console.log('FEB', Month3.FEB);
