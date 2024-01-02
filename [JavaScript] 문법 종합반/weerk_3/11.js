var obj1 = {
	outer: function() {
		console.log('TEST => ', this); // (1)
		var innerFunc = function() {
			console.log('TEST => ', this); // (2), (3)
		}
		innerFunc();  // 함수로서의 호출 -> 전역객체 가리킴

		var obj2 = {
			innerMethod: innerFunc
		};
		obj2.innerMethod(); // 메서드로서의 호출 -> obj2 가리킴
	}
};
obj1.outer(); // 메서드로서의 호출 -> obj1 가리킴 