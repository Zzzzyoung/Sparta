// apply => {{}, []}

//효율
/* var numbers = [10, 20, 3, 16, 45];
var max = Math.max.apply(null, numbers);
var min = Math.min.apply(null, numbers);
console.log('appky => ', max, min); */

// 펼치기 연산자(Spread Operation)를 통하면 더 간편하게 해결도 가능해요
const numbers = [10, 20, 3, 16, 45];
console.log(numbers);
console.log(...numbers); // 배열 풀어줌
const max = Math.max(...numbers); // this 바인딩 필요 없음
const min = Math.min(...numbers);
console.log('spread => ', max, min); 