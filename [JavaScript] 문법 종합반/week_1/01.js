// 변수, 상수
// 변수 : 메모리에 저장한다. 읽어들여서 재사용한다.

// [변수의 5가지 주요 개념]
// 변수 이름 : 저장된 값의 고유 이름
// 변수 값 : 변수에 저장된 값
// 변수 할당 : 변수에 값을 저장하는 행위
// 변수 선언 : 변수를 사용하기 위해 컴퓨터에 알리는 행위
// 변수 참조 : 변수에 할당된 값을 읽어오는 값

// 변수를 선언할 수 있는 3가지 방법 : var, let, const
// 1. var
var myVar = 'Hello World';
var myVar = 'Test 1'; // 똑같은 이름으로 다시 선언 가능
myVar = 'GoodBye'; // 재할당 가능
console.log(myVar);

/* var myVar1;
myVar1 = 3;
var myVar1 = 3; */

// 2. let
let myLet = 'Hello World1';
/* let myLet = 'Test2'; // 똑같은 이름으로 다시 선언 불가능 */
myLet = 'GoodBye 1'; // 재할당 가능
console.log(myLet);

// 3. const
const myConst = 'Hello World2';
/* const myConst = 'Test 3';  // 똑같은 이름으로 다시 선언 불가능 */
/* myConst = 'GoodBye 2'; // 재할당 불가능 */
console.log(myConst);
