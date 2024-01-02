// 객체
// key-value pair
// 하나의 변수에 여러 개의 값을 넣을 수 있다
// value에는 자료형 제한 없이 어떤 값이든 올 수 있음

// 1. 객체 생성 방법
// 1-1. 기본적인 객체 생성 방법
let person = {
    name : "홍길동",
    age : 30, 
    gender : "남자",
};

// 1-2. 생성자 함수를 이용한 객체 생성 방법
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

let person1 = new Person("홍길동", 30, "남자");
let person2 = new Person("홍길순", 20, "여자");


// 2. 접근하는 방법
console.log("1 " + person.name);
console.log("2", person.age);
console.log("3", person.gender);


// 3. 객체 메소드(객체가 가진 여러가지 기능 : Object.~~)
// 3-1. Object.key() : key를 가져오는 메소드
let keys = Object.keys(person);
console.log("keys => ", keys);

// 3-2. values
let values = Object.values(person);
console.log("values => ", values);

// 3-3. entries
// key와 value를 묶어서 배열로 만든 배열! (2차원 배열)
let enrites = Object.entries(person);
console.log("enrites => ", enrites);

// 3-4. assign
//복사
let newPerson = {};
Object.assign(newPerson, person, {age : 31, gender : '여자'});
console.log("newPerson => ", newPerson);

// 3-5. 객체 비교
// 크키가 상당히 크다 -> 메모리에 저장할 때 별도의 공간에 저장
// person01이 가지고 있는 값은 별도 공간에 대한 주소
let person01 = {
    name : "홍길동",
    age : 30, 
    gender : "남자",
};

// person02이 가지고 있는 값은 별도 공간에 대한 주소
let person02 = {
    name : "홍길동",
    age : 30, 
    gender : "남자",
};

// 직접적인 값을 가지고 있는 것이 아니라 저장할 때의 주소를 가지고 있는 것
// person01과 person02의 주소값은 다름
console.log("answer => ", person01 === person02); // false

// 크기가 크지 않기 때문에 값을 직접 저장
let str1 = 'aaa';
let str2 = 'aaa';
console.log("answer => ", str1 === str2); // true

console.log(JSON.stringify(person01) === JSON.stringify(person02)); 
//문자열화 시킨 후 비교하면 같음

// 3-6. 객체 병합
let person03 = {
    name : "홍길동",
    age : 30, 
};

let person04 = {
    gender : "남자",
};

// ... : spread operator
let perfectMan = {...person03, ...person04};
console.log(perfectMan);