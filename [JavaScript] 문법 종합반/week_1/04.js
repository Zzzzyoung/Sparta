// 3. 불리언(Boolean)
// true(참), false(거짓)
let bool1 = true;
let bool2 = false;

console.log(bool1);
console.log(typeof bool1);
console.log(bool2);
console.log(typeof bool2);


// 4. undefined
// un : not, defined : 정의하다
// 정의되지 않은, 값이 할당되지 않은 변수
let x;
console.log(x);
console.log(typeof x);


// 5. null
// 값이 존재하지 않음을 '명시적'으로 나타내는 방법
// null =/= undefined
let y = null;
console.log(y);
console.log(typeof y);


// 6. object(객체) : key-value pair
let person = {
    name : 'Jang',
    age : 20,
    isMarried : false
};
console.log(person);
console.log(typeof person);


// 7. array(배열)
// 여러 개의 데이터를 순서대로 저장하는 데이터 타입!!
let number = [1, 2, 3, 4, 5];
let fruits = ['apple', 'banana', 'orange'];

console.log(number);
console.log(typeof number);