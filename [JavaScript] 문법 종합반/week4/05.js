// map 함수 첫 번째 매개변수 : 콜백 함수
// 두 번째 매개변수 : this
Array.prototype.map123 = function(callback, thisArg) {
    
    // map 함수에서 return할 결과 배열(새로운 배열)
    var mappedArr = [];

    for (var i = 0; i < this.length; i++) {
        var mappedValue = callback.call(thisArg || global, this[i]);
        mappedArr[i] = mappedValue;
    }

    return mappedArr;
};

var newArr = [1, 2, 3].map123(function(number) {
    return number * 2;
});

console.log(newArr);

// 콜백 함수 내부에서 this를 명시적으로 바인딩하기 때문에 가능한 결과