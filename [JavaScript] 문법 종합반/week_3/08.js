var n = null;
console.log(typeof n); // object

//동등연산자(equality operator)
// type까지 일치하지는 않아도 됨
console.log(n == undefined); // true
console.log(n == null); // true

//일치연산자(identity operator)
console.log(n === undefined); // false
console.log(n === null); // true