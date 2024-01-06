// 알고리즘 맛보기 #1
// 최댓값 찾기
function find_max_num(array) {
    let max = array[0];

    for (i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        } else {
            max = max;
        }
    }

    return max;
}

console.log("정답 = 6 / 현재 풀이 값 = ", find_max_num([3, 5, 6, 1, 2, 4]));
console.log("정답 = 6 / 현재 풀이 값 = ", find_max_num([6, 6, 6]));
console.log("정답 = 1888 / 현재 풀이 값 = ", find_max_num([6, 9, 2, 7, 1888]));