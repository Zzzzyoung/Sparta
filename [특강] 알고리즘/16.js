// 버블 정렬
function bubbleSort(array) {
  let n = array.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // n-1 -> n-1-1 -> n-2-1
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

console.log(
  "정답 = [1, 2, 4, 6, 9] / 현재 풀이 값 = ",
  bubbleSort([4, 6, 2, 9, 1])
);
console.log(
  "정답 = [-1, 3, 9, 17] / 현재 풀이 값 = ",
  bubbleSort([3, -1, 17, 9])
);
console.log(
  "정답 = [-3, 32, 44, 56, 100] / 현재 풀이 값 = ",
  bubbleSort([100, 56, -3, 32, 44])
);
