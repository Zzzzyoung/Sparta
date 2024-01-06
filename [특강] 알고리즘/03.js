// 알고리즘 맛보기 #2
// UP & DOWN 게임
// 1. 무한루프를 돌아야해
// 2. 내가 정답을 맞추었을 때 무한루프 종료
// 3. break로 무한루프 빠져나옴

let num;
let input;
let count = 0;

while(input !== num) {
    if (input > num) {
        console.log('DOWN');
        count++;
    } else if (input < num) { 
        console.log('UP');
        count++;
    }
}
if (input === num) {
    console.log('CORRECT');
    count++;
    console.log('숫자 입력한 횟수 : ', +count, '회');
}

// 오답 이유 : 무한루프를 돌리지 않아서 값을 입력하고 단 한 번만 up & down을 알려줌

