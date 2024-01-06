// 클로저 (Closer)

// 스코프 체이닝 : 안에서부터 시작해 밖으로 한단계씩 나아가는 것

// 함수가 선언된 렉시컬 환경
// 함수가 선언돌 당시 외부 변수 등의 정보

const x = 1; // 전역 스코프

function outerFunc() {
  const x = 10; // outerFunc 스코프
  function innerFunc() {
    // x는 어디서 참조할까요?
    // 1. 함수 내부에서 찾음 -> 없음
    // 2. 바깥으로 시선 돌림 : outer
    // outer : innerFunc가 실행될 때의 렉시컬 환경 = outerFunc
    // 함수가 실행될 당시의 변수 정보가 담겨있음
    console.log(x); // 10
  }

  innerFunc();
}

outerFunc();