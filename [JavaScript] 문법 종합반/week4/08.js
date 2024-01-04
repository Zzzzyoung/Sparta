// [콜백 함수 내부의 this에 다른 값 바인딩하기]
// 콜백 함수 내부에서 this가 문맥에 맞는 객체를 바라보게 할 수는 없을까?
// 콜백 함수 내부의 this에 다른 값을 바인딩하는 방법


// 콜백 함수 내부에서 아예 this를 사용하지 않는다면?
// 결과만을 위한 코딩 => 하드코딩... 완전 10/100점짜리 코딩 -> 지양

var obj1 = {
	name: 'obj1',
	func: function () {
		console.log(obj1.name);
	}
};

setTimeout(obj1.func, 1000);

// self에 할당했던 방식 차용
// -> this 활용