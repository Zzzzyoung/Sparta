// index : 사람이 이해할 수 있는 변수명일 뿐
// currentValue : 사람이 이해할 수 있는 변수명일 뿐
// JS 엔진은 첫 번째 매개변수를 currentVAlue로, 두 번째 매개변수를 index로 인식
// 원하는 것을 얻고자 한다면 정해진 규칙대로 작성해야 함
// 사람이 인자를 제어하려고 해도 함수를 만든 map만이 콜백함수의 인자에 대한 제어권을 가지고 있음

var newArr = [10, 20, 30].map(function (index, currentValue) {
    console.log(index, currentValue);
    return currentValue + 5;
});
console.log(newArr);