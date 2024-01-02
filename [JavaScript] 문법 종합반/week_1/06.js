// 연산자(+, -, *, /, %)

// 1. 더하기 연산자(+)
console.log(1 + 1);
console.log(1 + '1');
// 문자열이 우선

// 2. 빼기 연산자(-)
console.log(1 - '2');
console.log(1 - 2);
// 숫자가 우선

// 3. 곱하기 연산자(*)
console.log(2 * 3);
console.log('2' * 3);
// 숫자가 우선

// 4. 나누기 연산자(/)
console.log(4 / 2);
console.log('4' / 2);

// 5. 나누기 연산자(/) vs 나머지 연산자(%)
console.log(5 / 2);
console.log(5 % 2);


// 6. 할당 연산자(assignment)
// 6-1. 등호 연산자(=)
let x = 10;
console.log(x);

// 6-2. 더하기 등호 연산자(+=)
x += 5; // x = x + 5;
console.log(x);

// 6-3. 빼기 등호 연산자(-+)
x -= 5; // x = x - 5;
console.log(x);

// 여기서 x를 -10으로
x -= 20; // x = x - 20;
console.log(x);

// 6-4. 곱하지 등호 연산자(*=)
let a = 10;
a *= 2;
console.log(a);


// 7. 비교 연산자
// true 또는 false 반환하는 연산자

// 7-1. 일치 연산자(===)
// 타입까지 일치해야 true 반환

// 숫자 2가 숫자 2랑 같니? 응
console.log('----------');
console.log(2 === 2); //true
console.log('2' === 2); // false
console.log(2 === '2'); // false

// 7-2. 불일치 연산자(!==)
// 타입까지 일치해야 false 반환

// 숫자 2가 숫자 2와 다르니? 아니
console.log('----------');
console.log(2 !== 2); // false
console.log('2' !== 2); // true
console.log(2 !== '2'); // true

// 7-3. 작다 연산자(<), 작거나 같다 연산자(<=)
console.log('----------');
console.log(2 < 3); // true
console.log(2 <= 3); // true
console.log(3 <= 3); // true
console.log(4 <= 3); // false

// 8. 논리 연산자 
// true와 false를 비교하는 연산자

// 8-1. 논리곱 연산자(&&)
// 두 값이 모두 true일 때만 true 반환
console.log('----------');
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// 8-2. 논리합 연산자(||)
// 두 값 중 하나라도 true인 경우 true 반환
console.log('----------');
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// 8-3. 논리부정 연산자(!)
// 값을 반대로 바꿈
console.log('----------');
console.log(!true); // false

let b = true;
console.log(!a); // false

// 9. 삼항 연산자(?)
// 조건에 따라 값을 선택한다.
let x_ = 10; 
let result_ = (x_ > 5) ? '크다' : '작다';
console.log('----------');
console.log(result_);

console.log('----------');
let y = 20;
// 삼항 연산자를 이용해서 y가 10보다 작은 경우 작다를
// console.log.로 출력해주세요.
// 10보다 크다면 크다를 출력해주세요.
let answer = (y < 10) ? '작다' : '크다';
console.log(answer);

// 10. 타입 연산자(typeof)
console.log('----------');
console.log(typeof '5'); // string