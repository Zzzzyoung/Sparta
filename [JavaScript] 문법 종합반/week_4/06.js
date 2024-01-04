// obj
// 2가지 속성
// (1) 배열
// (2) 함수

// 메서드로서 호출
var obj = {
    vals : [1, 2, 3],
    logValues : function (v, i) {
        console.log('>>> test starts');
        console.log(this, v, i); // obj 출력
        console.log('>>> test ends');
    },
};

// method로서 호출
obj.logValues(1, 2);
// 호출 주체가 obj로 명확하기 때문에 함수 내의 this는 무조건 obj

// 콜백 함수
var obj = {
    vals : [1, 2, 3],
    logValues : function (v, i) {
        console.log('>>> test starts');
        if (this === global) {
            console.log('this가 global입니다. 원하지 않는 결과!');
        }
        else {
            console.log(this, v, i);
        }
        console.log('>>> test ends');
    },
};

// forEach, map, filter
// logValues의 매개변수로는 어떤게 들어갈까?
// 첫 번째 인자 : 기준이 되는 배열의 n번째 요소
// 두 번째 인자 : n번째 요소의 인덱스
[4, 5, 6].forEach(obj.logValues)
// forEach의 매개변수로 obj.을 넣었기 때문에 함수 자체가 아닌 메서드를 넣은 거 아니야
// 메서드의 형태처럼 보이지만, function부터 시작하는 함수 자체를 넣은 것
/* obj.logValues == function (v, i) {
        console.log('>>> test starts');
        if (this === global) {
            console.log('this가 global입니다. 원하지 않는 결과!');
        }
        else {
            console.log(this, v, i);
        }
        console.log('>>> test ends');
    } */

// 메서드로서의 호출 : 호출을 해야하는 것
// 매개변수를 넘겨주었다고 해서 인식할 수는 없음