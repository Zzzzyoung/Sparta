// 상속(Inheritance)
// Class의 기능을 유산으로 내려주는 주요 기능
// 부모 <-> 자식

// 상위 클래스
// 동물 전체에 대한 클래스 
class Animal {

    // 생성자
    constructor (name) {
        this.name = name;
    }

    // 메서드(짖다)
    speak () {
        console.log(`${this.name} says!`);
    }
}

const me = new Animal('jy');
me.speak();

// 하위 클래스
// 강아지에 대한 클래스
class Dog extends Animal {
    // 부모에게서 내려받은 메서드 재정의 할 수 있음
    // overriding
    speak () {
        console.log(`${this.name} barks!`);
    }
}

const cuttiePuppy = new Dog('복실이');
cuttiePuppy.speak();