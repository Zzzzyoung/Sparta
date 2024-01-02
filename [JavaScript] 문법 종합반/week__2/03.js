// 1. 단축 속성명 : property shorthand
const name = 'nbc';
const newAge = '30';

// key-value pair
// 왼쪽은 이름
// 오른쪽은 실질적인 값
const obj = {
    name, // key와 value 값이 같은 경우에는 생략 가능
    age: newAge // 생략 불가능
}

// key값과 value값이 같은 경우에는 생략 가능
// const obj = {name, age}
// const obj = {name : name, age : age}
// key와 value 값이 같은 경우에 배열과 같은 형식으로 쓰일 수도 있음

// 2. 전개 구문 = spread operator
// destructuring과 함께 가장 많이 사용되는 es6 문법 중 하나
// 새로운 구조로 덧입혀야 하는 경우에 사용

// 배열
let arr = [1, 2, 3];
console.log(arr);
console.log(...arr);

let newArr = [...arr, 4];
console.log(arr);
console.log(newArr);

// 객체
let user = {
    name: 'nbc',
    age: 30,
}

let user2 = { ...user }

console.log(user);
console.log(user2);

// 3. 나머지 매개변수(rest parameter)
function exampleFunc(a, b, c, ...args) {
    console.log(a, b, c);
    console.log(...args);
    console.log(args);
}

exampleFunc(1, 2, 3, 4, 5, 6, 7);

// 4. 템플릿 리터럴(template literal)
// 백틱(``)
// 자바스트립트 코드, 연산, 변수, ... 들어갈 수 있음
const testValue = '안녕하세요';
console.log(`Hello World ${3 + 3}`);
console.log(`Hello World ${testValue}`);

// 멀티라인 지원
console.log(`
    Hello
        My name is Javascript!!

        Nice to meet you!!!
`);
