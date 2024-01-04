// 콜백 지옥 해결 방법
// 1 기명함수로 변환

// 기명함수 : 이름이 있는 함수로 이름을 함수의 왼쪽에 붙여줌
// 1-1. 모든 함수에 이름 붙여줌
// 단점 : 익명함수로 한 번 밖에 쓰지 않을 건데 이름을 전부 붙여주어야 함
// -> 그렇다면 근본적인 해결책은?

var coffeeList = '';

var addEspresso = function (name) {
	coffeeList = name;
	console.log(coffeeList);
	setTimeout(addAmericano, 500, '아메리카노');
};

var addAmericano = function (name) {
	coffeeList += ', ' + name;
	console.log(coffeeList);
	setTimeout(addMocha, 500, '카페모카');
};

var addMocha = function (name) {
	coffeeList += ', ' + name;
	console.log(coffeeList);
	setTimeout(addLatte, 500, '카페라떼');
};

var addLatte = function (name) {
	coffeeList += ', ' + name;
	console.log(coffeeList);
};

setTimeout(addEspresso, 500, '에스프레소');