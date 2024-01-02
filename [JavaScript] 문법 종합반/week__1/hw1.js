function solution(str){
    let answer = true;
    str = str.toLowerCase();

    let num = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'p') num++;
        if (str[i] === 'y') num--;
    }
    if (num === 0) {
        answer = true;
    } else { 
        answer = false;
    }

    return answer;
}

console.log(solution('pPoooyY'));
console.log(solution('Pyy'));

// 1. 대문자로 통일
// 2. for문을 이용해서 문자열의 요소 하나하나씩을 비교
// 2-1. p, y 비교
// 3. 개수 체크(p와 y의 개수가 같은지를 체크)