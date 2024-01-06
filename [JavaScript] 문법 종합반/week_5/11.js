const x = 1;

// 1
function outer() {
  const x = 10;
  const inner = function () {
    console.log(x);
  };
  return inner;
}

// outer 함수를 '실행'해서, innerFunc에 담는다
// outer 함수의 return 부분을 innerFunc에 담는다
const innerFunc = outer();
/* const innerFunc = function () {
    console.log(x);
  }; */
// ------------------ 여기서 outer 함수의 실행컨텍스는?


innerFunc(); // console.log(x); 가 출력




// 함수 실행 : ()