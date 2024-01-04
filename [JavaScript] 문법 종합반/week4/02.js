// 무슨 제어권?
// 1. 호출 시점에 대한 제어권을 갖는다.
// setInterval : 반복해서 매개변수로 받은 콜백함수의 로직을 수행
// 0.3초에 대한 제어권을 setInterval이 갖고 있음
var count = 0;
var cbFunc = function() {
    console.log(count);
    if(++count>4) clearInterval(timer);
};

var timer = setInterval(cbFunc, 300);
// cbFunc(); 함수 호출 시 제어권을 우리가 갖기 때문에 한 번만 실행되고 끝
// 출력값 : 0