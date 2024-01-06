// 알고리즘 맛보기 #3
// 문자열 요약하기

function summarize_string(target_string) {
    let n = target_string.length;
    let count = 0;
    let result_str = '';

    // 0 ~ n-2까지 루프를 돌아요
    for (let i = 0; i < n - 1; i++) {
        // i번째 문자와 i + 1번째 문자가 같으면 count를 늘려야겠죠?!
        if (target_string[i] === target_string[i + 1]) {
            count++;
        } else {
            // i번째 문자와 i + 1번째 문자가 같지 않으면 카운트를 멈춰요! 
            // 그리고, 현재 문자랑 카운트를 혼합해서 요약표현을 만들어요!
            // count 초기화는 잊지마세요!
            result_str += target_string[i] + String(count + 1) + '/';
            count = 0;
        }
    }
    // 위에서 n-1 까지 루프를 안 돌았던 이유는 n-1이 마지막 문자이기 때문에 결산을 하기 위함!
    result_str += target_string[n - 1] + String(count + 1);

    return result_str;
}

let input_str = "acccdeee";

console.log(summarize_string(input_str));