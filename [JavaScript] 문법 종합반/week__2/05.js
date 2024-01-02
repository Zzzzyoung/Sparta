// 일급객체로서의 함수 (2)
// 4. 객체의 property로 함수 할당할 수 있다.
const person = {
    name : 'John',
    age : 31,
    isMarried : true, // 객체에는 어떤 데이터 타입도 들어갈 수 있음
    // sayHello : function () {
        // console.log('Hello, My name is ' + this.name);
        // console.log(`Hello, My name is ${person.name}`);
        // console.log(`Hello, My name is ${this.name}`);
    // },
    sayHello : () => {
        console.log(`Hello, My name is ${this.name}`); // undefined
                                                       // 화살표 함수는 this를 바인딩 하지 않는다.
        // console.log(`Hello, My name is ${person.name}`); // Hello, My name is John
    }
}
// this : 항상 자기 자신을 가리킨다.
//        person 내에서의 this는 person을 가리킴
person.sayHello();