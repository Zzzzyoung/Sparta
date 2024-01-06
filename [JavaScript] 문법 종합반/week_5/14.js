// 카운트 상태 변경 함수 #3
const increase = (function () {
    // 카운트 상태 변수
    let num = 0;
  
    // 클로저
    return function () {
      return ++num;
    };
  })();
  
  // 이전 상태값을 유지
  console.log(increase()); //1
  console.log(increase()); //2
  console.log(increase()); //3


  // [코드 설명]
  // 1. 위 코드가 실행되면, '즉시 실행 함수'가 호출 : (function () { ~ })
  // -> 함수가 반환(inner)
  // -> increase 변수에 할당
  // 2. increase 변수에 할당된 함수는 자신이 정의된 위치에 의해서 결정된
  // 상위 스코프인 즉시 실행 함수의 '렉시컬 환경'을 기억하는 클로저
  // -> let num = 0; 를 기억해 계속 실행해도 값이 유지
  // 3. 즉시 실행함수는 -> 즉시 소멸! 
  // (outer 함수가 불리자마자 바로 call stack에서 popup 되는 것과 비슷)

  // * 결론
  // num은 초기화 X
  // 외부에서 접근할 수 없는 은닉한 값
  // 의도되지 않은 변경도 걱정할 필요가 없음
  // --> num는 increase에서만 변경할 수 있기 때문에




  // 함수 increase 
  // : 함수 
  /* (function () {
    let num = 0;

    return function () {
      return ++num;
    };
  }) */
  // 를 실행한 것
  // 출력값으로 function () { return ++num; }; 를 뱉어내는 함수를 실행한 것
  // function () { return ++num; }; 는 항상 외부 환경의 num 참조
  // -> 가비지 컬렉터가 가져가지 않아 상태 계속 유지