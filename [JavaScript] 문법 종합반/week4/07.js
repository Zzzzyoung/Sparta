// 명시적 binding 방법
// call, apply, bind

// 이전
// self 라는 변수 만들어 this 할당

// [콜백 함수 내부의 this에 다른 값 바인딩하기]
// 콜백 함수 내부에서 this가 문맥에 맞는 객체를 바라보게 할 수는 없을까?
// 콜백 함수 내부의 this에 다른 값을 바인딩하는 방법

// 1. 전통적 방식

// closure 방식 
// 현재의 함수가 끝났음에도 불구하고 영향력을 끼친다
// 우리가 참조하는 함수 부분 안에서 사용하는 self는 바깥에 있어서 바깥에서 참조하고 있는 self가 아직 살아있다

var obj1 = {
	name: 'obj1',
	func: function() {
		var self = this; //이 부분!
		return function () {
			console.log(self.name);
		};
	}
};
// 안에서 self.name을 출력했지만, 밖에 있는 self.name을 출력

// 단순히 함수만 전달한 것이기 때문에, obj1 객체와는 상관이 없어요.
// 메서드가 아닌 함수로서 호출한 것과 동일하죠.
var callback = obj1.func(); // 함수 자체가 아닌 실행한 결과(= return한 값)를 담은 것
/* var callback = function () {
			console.log(self.name);
	}; */
setTimeout(callback, 1000);