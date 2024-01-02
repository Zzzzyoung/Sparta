//비효율
var numbers = [10, 20, 3, 16, 45];
var max = min = numbers[0]; // 10
numbers.forEach(function(number, index) {
	console.log(index + '번째 값 => ' + number);
});
