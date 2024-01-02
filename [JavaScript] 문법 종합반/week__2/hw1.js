// strings = ['sun', 'bed', 'car']
// n = 1
// strings = ['abce', 'abcd', 'cdx']
// n = 2

function solution(strings, n) {
    var answer = [];

    // 1. 문자열 가장 앞 글자를 붙인 배열 만들기
    for (let i = 0; i < strings.length; i++) {
        strings[i] = strings[i][n] + strings[i];
    }
    // console.log(strings);

    // 2. 해당 배열을 사전순으로 정렬(sort)
    strings.sort();
    // console.log(strings);

    //3. 앞글자 제거 후 리턴
    for (let j = 0; j < strings.length; j++) {
        strings[j] = strings[j].replace(strings[j][0], '');
        answer.push(strings[j]);
    }
    // console.log('ANSWER = ', answer);

    return answer;
}

// solution(['sun', 'bed', 'car'], 1);
solution(['abce', 'abcd', 'cdx'], 2);