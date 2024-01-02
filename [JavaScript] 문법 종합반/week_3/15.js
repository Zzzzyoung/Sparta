// (2) 호출 주체가 있는 경우에서 명시적 binding

var obj = {
	a: 1,
	method: function (x, y) {
		console.log(this.a, x, y);
	}
};

// method 함수 안의 this는 항상 obj
obj.method(2, 3); // 1 2 3
obj.method.apply({ a: 4 }, [5, 6]); // 4 5 6