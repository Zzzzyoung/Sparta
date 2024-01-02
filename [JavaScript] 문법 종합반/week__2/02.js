// 구조분해할당 : destructuring (de + structure + ing)
// de : not
// structure : 구조
// 구조를 없애버려서 각각을 할당한다
// 배열이나, 객체의 속성

// 1. 배열의 경우
let [value1, value2] = [1, 'new'];
console.log('1', value1);
console.log('2', value2);

let arr = ['value1', 'value2', 'value3', 'value4'];
let [a, b, c, d = 4, e] = arr;

console.log(a);
console.log(b);
console.log(c);
console.log(d); 
console.log(e); // undefined

// 2. 객체인 경우
let user = {
    name : 'nbc',
    age : 30,
    birthday : 'yeesterday'
}

// 구조분해할당
// 오른쪽 객체 각각의 요소를 분해해서 왼쪽에 있는 변수에 각각 할당
// let {name, age} = user // 이게 없으면 console.log 했을 때 name과 age가 undefined 되었다고 나옴
                       // object
// let {name, age} = {
//     name : 'nbc',
//     age : 30,
// }


// console.log('name => ', name); // string
// console.log('name => ', age); // number

// 새로운 이름으로 할당
// key 이름을 바꾸어줌
// let {
//     name : newName,
//     age : newAge,
// } = user

// console.log('newName => ', newName); // string
// console.log('newAge => ', newAge); // number

let { name, age, birthday = 'today', address } = user;
// 초기값은 undefined일 경우에만 의미가 있음
console.log(name);
console.log(age);
console.log(birthday); // yesterdat
console.log(address); // undefined
