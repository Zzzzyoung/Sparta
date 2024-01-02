const myMap = new Map();
myMap.set('one', 1);
myMap.set('two', 2);
myMap.set('three', 3);

console.log(myMap.keys()); // [Map Iterator]
for (const key of myMap.keys()) {
    console.log(key);
}

console.log(myMap.values()); // [Map Iterator]
for (const value of myMap.values()) {
    console.log(value);
}

console.log(myMap.entries()); // [Map Entries]
                              // key와 value를 배열로 묶고 전체 key value 쌍을 객체로 묶어줌
for (const entry of myMap.entries()) {
    console.log(entry);
}

// Map의 크기 확인
console.log(myMap.size); // map의 사이즈(길이)

// Map의 존재 여부 확인
console.log(myMap.has('two')); // key 검색
// console.log(myMap.has(2)); // value 검색 -> 불가능