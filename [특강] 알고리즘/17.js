// 선택 정렬
function selectionSort(array) {
  let n = array.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i; // i번째에 들어갈 최소값 찾기
    for (j = i + 1; j < n; j++) {
      // 현재 최소값으로 설정된 요소보다 더 작은 요소 발견 시
      if (array[j] < array[minIndex]) {
        minIndex = j; // 최소값 인덱스 갱신
      }
    }
    // i번째에 최소값 인덱스에 있는 값 넣어주기
    let temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }
  return array;
}
console.log(
  "정답 = [1, 2, 4, 6, 9] / 현재 풀이 값 = ",
  selectionSort([4, 6, 2, 9, 1])
);
console.log(
  "정답 = [-1, 3, 9, 17] / 현재 풀이 값 = ",
  selectionSort([3, -1, 17, 9])
);
console.log(
  "정답 = [-3, 32, 44, 56, 100] / 현재 풀이 값 = ",
  selectionSort([100, 56, -3, 32, 44])
);
