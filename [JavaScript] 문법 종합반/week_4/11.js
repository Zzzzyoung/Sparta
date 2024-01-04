// 즉시 실행 함수가 아닌 this를 바인딩하는 방법

// 2. bind 메서드 활용
// call, apply : 괄호 열고 닫지마자 바로 실행 -> 즉시 실행
// bind : this 바인딩 해 새로운 함수 리턴
//       -> 함수를 만들어 놓을 때 유용

var obj1 = {
	name: 'obj1',
	func: function () {
		console.log(this.name);
	}
};


// 2-1. 바인드 이용해 새로운 함수 리턴
// 원래 선언해놓은 this 바인딩

//함수 자체를 obj1에 바인딩
//obj1.func를 실행할 때 무조건 this는 obj1로 고정해줘!
setTimeout(obj1.func.bind(obj1), 1000); // obj1


// 2-2. 함수 자체를 바인딩
// 어떤 this든 원하는대로 바인딩 가능
var obj2 = { name: 'obj2' };
//함수 자체를 obj2에 바인딩
//obj1.func를 실행할 때 무조건 this는 obj2로 고정해줘!
setTimeout(obj1.func.bind(obj2), 1500); // obj2