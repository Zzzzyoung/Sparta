// while
let i = 0;

// while (조건) {
    // main logic
    // 증감
// }

//for (초기값; 조건식; 증감) {

//}

while (i < 10) {
    console.log(i);
    i++;
}

// while문을 활용해서, 3 초과 100 미만의 숫자 중 5의 배수인 것만 출력하는 예
let j = 3;
while (j < 100) {
    if (j % 5 === 0 && i >= 5) {
        console.log(j + '는 5의 배수입니다.');
    }
    j++;
}


// do ~ while
let k = 0;

do {
    console.log(k);
    k++;
} while (k > 10);


// break, continue문
// break문 : for문 밖으로 나감
for (let n = 0; n < 10; n++) {
    if (n === 5) {
        break;
    }
    console.log(n);
}

// continue문 : 다음 반복문 순서로 넘어감
for (let m = 0; m < 10; m++) {
    if (m === 5) {
        continue;
    }
    console.log(m);
}