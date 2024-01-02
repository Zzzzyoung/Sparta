/* function Student(name, gender, school) {
    this.name = name;
    this.gender = gender;
    this.school = school;
}
function Employee(name, gender, company) {
    this.name = name;
    this.gender = gender;
    this.company = company;
}
var kd = new Student('길동', 'male', '서울대');
var ks = new Employee('길순', 'female', '삼성');
console.log(kd);
console.log(ks); */


// Student와 Employee를 call과 apply 메서드 이용해 하나로 함치기

function Person(name, gender) {
    this.name = name;
    this.gender = gender;
}
function Student(name, gender, school) {
    Person.call(this, name, gender); // 여기서 this는 student 인스턴스!
    this.school = school;
}
function Employee(name, gender, company) {
    Person.apply(this, [name, gender]); // 여기서 this는 employee 인스턴스!
    this.company = company;
}
var kd = new Student('길동', 'male', '서울대');
var ks = new Employee('길순', 'female', '삼성');
var kj = new Person('길자', 'female');
console.log(kd);
console.log(ks); 
console.log(kj); 

// call과 apply 덕분에 this binding 가능