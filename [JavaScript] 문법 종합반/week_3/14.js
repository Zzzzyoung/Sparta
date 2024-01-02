// 명시적 this binding
// call, apply, bind 메서드
// apply
var func = function (a, b, c) {
	console.log(this, a, b, c);
};

// no binding
func(1, 2, 3); // Window{ ... } 1 2 3
               // 호출 주체가 없으므로 this는 전역 객체

// 명시적 binding
// func 안에 this에는 {x: 1}이 binding돼요
func.apply({ x: 1 }, [4, 5, 6]); // { x: 1 } 4 5 6

// (1) 전역 객체 바라보는 현상에서 명시적 binding