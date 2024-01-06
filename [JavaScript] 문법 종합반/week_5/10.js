// [렉시컬 스코프]
// JS 엔진은 함수를 어디서 '호출' 했는지가 아니라
// 어디에 '정의' 했는지에 따라서 스코프(상위 스코프)를 정의

// '외부 렉시컬 환경에 대한 참조값' => outer
// 함수 정의가 평가되는 시점

// 함수가 정의되는 시점에 호출되어 스코프 결정

const x = 1;

// innerFunc()에서는 outerFunc()의 x에 접근할 수 없죠.
// Lexical Scope를 따르는 프로그래밍 언어이기 때문

// outerFunc에 innerFunc가 '호출'되고 있음에도 불구하고
// 선언은 밖에서 되었기 때문에 스코프 공유하지 않음
function outerFunc() {
  const x = 10;
  innerFunc(); // 1
}

// innerFunc와 outerFunc는 서로 다른 scpoe 가지고 있음
function innerFunc() {
  console.log(x); // 1
}

outerFunc();