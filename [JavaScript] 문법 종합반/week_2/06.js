// 5. 배열의 요소로 함수를 할당할 수 있다.

const myArr = [
    function (a, b) {
        return a + b;
    }, // 0번째 요소
    function (a, b) {
        return a - b;
    }, // 1번째 요소
];

// 더하기
console.log(myArr[0](1, 3));
// 빼기
console.log(myArr[1](10, 7));