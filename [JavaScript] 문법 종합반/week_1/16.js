// 배열

// 1. 생성
// 1-1. 기본 생성
// let fruits = ['사과', '바나나', '오렌지'];

// 1-2. 크기 지정
// let numbers = new Array(5);

// console.log(fruits.length);
// console.log(numbers.length);

// 2. 요소 접근
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// 3. 배열 메소드
// 3-1. push
// let fruits = ['사과', '바나나'];
// console.log('1 => ', fruits);

// fruits.push('오렌지');
// console.log('2 => ', fruits);

// 3-2. pop
// fruits.pop();
// console.log('3 => ', fruits);

// 3-3. shift
let fruits = ['사과', '바나나', '키위'];
console.log('1 => ', fruits);

fruits.shift();
console.log('2 => ', fruits);

// 3-4. unshift
fruits.unshift('포도');
console.log(fruits);

// 3-5. splice
fruits.splice(1, 1, '오렌지'); // index[1]에서 1개를 지우고 '오렌지' 추가해줘
console.log(fruits);

// 3-6. slice
let slicedFruits = fruits.slice(1, 2); // index[1]에서 index[2] 전까지 반환해줘
console.log(slicedFruits);

// 3-7. (1) forEach
// 안의 함수가 실행되도록 함
let numbers = [4, 1, 5, 4, 5];

// 매개변수 자리에 함수를 넣는 것 : 콜백 함수
numbers.forEach(function(item){
    console.log('item입니다. => ' + item);
});

// (2) map
// 기존에 있던 배열 가공해 새로운 배열 생산해내는 역할
// 새로운 배열이 생산되므로 새로운 배열 받을 변수 필요
// return문 필요
// 항상 원본 배열의 길이만큼이 return됨
let newNumbers = numbers.map(function(item){

    return item *2;

})

console.log(newNumbers);

// (3) filter
// 조건에 해당되는 것만 리턴
let filteredNumbers = numbers.filter(function(item){
 
    return item === 5; // 필터링 할 조건
})
console.log(filteredNumbers);

// (4) find
// 조건에 맞는 첫번째 것만 리턴
let result = numbers.find(function(item){
    return item > 3;
})
console.log(result);