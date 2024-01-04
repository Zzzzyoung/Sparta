// 콜백 함수의 근본적인 해결법
// 비동기적 작업 동기적으로 처리
// 왜?
// 비동기 작업은 순서를 보장할 수 없기 때문에 순서 보장이 필요한 로직에서 순서를 보장 받기 위해

// promise, generator, async/await

// 2. generator

// * 붙은 함수가 generator 함수
// 이 함수를 실행하면 -> iterator 객체가 반환됨
// 여기서는 coffeeMaker가 iterator 객체
// next 메서드로 계속해서 순환 가능
// yield 만나면 멈췄다가 ddCoffee('', '에스프레소'); 가 끝날 때까지 기다림
// 다시 next 메서드 호출

// stop을 걸어준다


// (1) 제너레이터 함수 안에서 사용할 addCoffee 함수 선언
var addCoffee = function (prevName, name) {
	setTimeout(function () {
		coffeeMaker.next(prevName ? prevName + ', ' + name : name);
	}, 500);
};

// (2) 제너레이터 함수 선언
// 제너레이터 함수 안에서는 yield 키워드로 순서 제어
var coffeeGenerator = function* () {
	var espresso = yield addCoffee('', '에스프레소');
	console.log(espresso);
	var americano = yield addCoffee(espresso, '아메리카노');
	console.log(americano);
	var mocha = yield addCoffee(americano, '카페모카');
	console.log(mocha);
	var latte = yield addCoffee(mocha, '카페라떼');
	console.log(latte);
};

var coffeeMaker = coffeeGenerator();
coffeeMaker.next();