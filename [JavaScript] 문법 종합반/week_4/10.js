// 첫 번째 예시 재활용하는 방향으로

var obj1 = {
	name: 'obj1',
	func: function() {
		var self = this; //이 부분!
		return function () {
			console.log(self.name);
		};
	}
};


// 역시, obj1의 func를 직접 아래에 대입해보면 조금 더 보기 쉽습니다!
var obj3 = { name: 'obj3' };
var callback3 = obj1.func.call(obj3); // 즉시 실행 함수
setTimeout(callback3, 2000);