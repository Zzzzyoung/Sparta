
function reverseStr(str) {
    let result = '';
    for (let i = str.length; i >= 0; i--) {
        result += str[i];
    }
    return result;
}

let str = 'spartan';
console.log(reverseStr(str));

