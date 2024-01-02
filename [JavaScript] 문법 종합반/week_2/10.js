// Set
// - 고유한 값을 저장하는 자료구조
// - 값만 저장
// - 키를 저장하지는 않는다.
// - 값이 중복되지 않는 유일한 요소로만 구성
// 값 추가, 검색, 값 삭제, 모든 값 제거, 존재 여부 확인

// Set 생성
const mySet = new Set(); 

// Set 추가
mySet.add('value1');
mySet.add('value2');
mySet.add('value3');
mySet.add('value5');
mySet.add('value8');

// Set 크기 확인
console.log(mySet.size); // 2

mySet.add('value2');
console.log(mySet.size); // 2
// 똑같은 값은 추가되지 않음
// 중복된 값으로 인식

// Set의 존재 여부 확인
console.log(mySet.has('value1'));
console.log(mySet.has('value2'));
console.log(mySet.has('value3'));

// Iterator, 반복
for (const value of mySet.values()) {
    console.log(value);
}