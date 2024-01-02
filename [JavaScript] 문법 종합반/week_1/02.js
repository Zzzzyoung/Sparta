// 데이터 타입
// runtime : run 하는 time
//           코드를 작성할 때가 아니라, 실제 코드가 실행될 때
//           -> 터미널에 코드가 실행될 때
//              그 때, 데이터 타입이 결정
// Java : String a = 'abc'
// JS : const a = 'abc'; 코드가 짜여질 때는 데이터 타입 모름

// 1. 숫자
// 1-1. 정수
let num1 = 10; // 따옴표 들어가지 않음
console.log(num1);
console.log(typeof num1);

// 1-2. 실수(float)
let num2 = 3.14;
console.log(num2);
console.log(typeof num2);

// 1-3. 지수형(Exp)
let num3 = 2.5e5; // 2.5 x 10^5
console.log(num3);
console.log(typeof num3);

// 1-4. NaN(Not a Number)
// 숫자가 아닌 값을 변환하려고 할 때 나타나는 현상
let num4 = 'Hello' / 2;
console.log(num4);
console.log(typeof num4);

// 1-5. Infinity(무한대)
let num5 = 1 / 0;
console.log(num5);
console.log(typeof num5);

// 1-6. Infinity(무한대)
let num6 = -1 / 0;
console.log(num6);
console.log(typeof num6);