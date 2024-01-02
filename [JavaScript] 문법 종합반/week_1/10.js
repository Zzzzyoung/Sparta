// 화살표 함수
// ES6 신 문법
function add(x, y) {
    return x + y;
}

// 1-1. 기본적인 화살표 함수(arrow function)
let arrowFunc01 = (x, y) => {
    return x + y;
}

// 1-2. 한 줄로
let arrowFunc02 = (x, y) => x + y; 
// return문 뺄 수 있음
// 조건 : 주괄호 안에 있는 줄이 한 줄일 때만

//
function testFunc(x) {
    return x;
}

// 화살표 함수로
let arrowFunc03 = x => x; // 매개변수가 하나일 때는 괄호치지 않아도 됨
