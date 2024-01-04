// [콜백 함수 내부의 this에 다른 값 바인딩하기]
// 콜백 함수 내부에서 this가 문맥에 맞는 객체를 바라보게 할 수는 없을까?
// 콜백 함수 내부의 this에 다른 값을 바인딩하는 방법


// 첫 번째 예시 재활용하는 방향으로

var obj1 = {
	name: 'obj1',
	func: function() {
		var self = this; //이 부분!
		return function () {
			console.log(self.name);
		};
	},
};

// obj1의 func를 직접 아래에 대입해보면 조금 더 보기 쉽습니다!
var obj2 = {
	name: 'obj2',
	func: obj1.func
};
/* var obj2 = {
	name: 'obj2',
	func: function() {
		var self = this; //이 부분!
		return function () {
			console.log(self.name);
		};
	},
}; */

var callback2 = obj2.func(); // 함수 실행한 결과
/* var callback2 = function () {
		console.log(self.name); // obj2
	}; */
setTimeout(callback2, 1500);