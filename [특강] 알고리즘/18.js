// 삽입 정렬
let list = [5, 4, 3, 2, 1];
function selectionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[i]) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}
console.log(selectionSort(list));
