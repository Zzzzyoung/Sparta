// 클래스라는 설계도를 만들어봅시다
// 객체를 정확하고 빠르게 많이 만들 수 있기 때문에 필요

class Person {
    // 우리는 사람이기 때문에 필수 요소
    // name, age
    constructor (name, age) {
        this.name = name; // 왼쪽 : 우리가 만들 인스턴스(실체 - 사람), 오른쪽 : 외부로부터 받아온 것
        this.age = age;
    }

    // 메서드 형태의 동사 표현
    sayHello () {
        console.log(this.name + '님 안녕하세요!');
        // console.log(`${this.name}님 안녕하세요!`);
    }

    sayAge () {
        console.log(`${this.name}님의 나이는 ${this.age}살 입니다.`);
    }
}



// 설계도를 통해 인스턴스(실제 사물) 만들어봅시다
// 이름은 홍길동이고, 나이는 30살인 사람 하나를 만들어줘 (설계도에 근거해서)
// 사람을 만들고 나서 실질적으로 변경하는 것이 아니기 때문에 const로 변수 선언
const person1 = new Person('홍길동', '30');
const person2 = new Person('홍길순', '25');

person1.sayHello();
person1.sayAge();
person2.sayHello();
person2.sayAge();