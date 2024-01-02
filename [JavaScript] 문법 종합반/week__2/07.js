function multiplyBy(num) {
    return function(x) {
        return x * num;
    };
}

function add(x, y) {
    return x + y;
}

const multiplyByTwo = multiplyBy(2);
// const multiplyByTwo = function(x) {
//     return x * 2;
// };
const multiplyByThree = multiplyBy(3);

console.log(multiplyByTwo);
console.log(multiplyByTwo(10));
console.log(multiplyByThree);
console.log(multiplyByThree(10));

const result = add(multiplyByTwo(5), multiplyByThree(10)); //40
console.log(`FINAL => ${result}`);