function primeNum(num) {
    if (num <= 1) {
        return '소수가 아닙니다.';
    }
    for (let i = 2; i < num; i++) {
        if (num % i !== 0) {
            return '소수입니다.';
        } else {
            return '소수가 아닙니다.';
        }
    }
}

console.log(primeNum(13));