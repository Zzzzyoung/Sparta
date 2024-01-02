// ES6

// 2015년도 이전 => var
// 1. es6 => let(변수0), const(상수)

// const : 재할당 불가능, 재선언 불가능
// let : 재할당 가능, 재선언 불가능
// var : 재할당 가능, 재선언 가능

// 2. arrow function
function add () {

}

var add = (x) => {
    return 1;
}

var add = (x) => 1;

var add = x => 1;

// 3. 삼항 연산자
// condition ? true인 경우 : false인 경우

console.log(true ? "참" : "거짓");
console.log(false ? "참" : "거짓");
console.log(1 === 1 ? "참" : "거짓");
console.log(1 !== 1 ? "참" : "거짓");
