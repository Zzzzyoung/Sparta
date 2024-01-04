// 비동기적 코드의 이해
setTimeout(function () {
    console.log('여기가 먼저 실행될까?');
}, 1000);

console.log('여기 좀 봐주세요!');

// setTimeour이 끝나는 것을 기다리지 않고, 주문만 미리 받아놓고, 밑에 console.log 실행
// 위에 console.log는 1초가 지난 뒤에 실행