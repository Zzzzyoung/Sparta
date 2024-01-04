// 무슨 제어권?
// 2. 인자에 대한 제어권을 갖는다.
// map 함수
/* var newArr = [10, 20, 30].map(function (currentValue, index) {
    console.log(currentValue, index);
})

// 결과는 뭐가 될까?
console.log(newArr) // undefined
                    // map 함수는 원래 배열의 크기만큼 무언가를 할당해야 함
                    // return이 없으면 undefined라도 할당 */

var newArr = [10, 20, 30].map(function (currentValue, index) {
    console.log(currentValue, index);
    return currentValue + 5;
});
console.log(newArr);