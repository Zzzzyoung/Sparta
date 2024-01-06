// Static Method(정적 메소드)
// Class -> 객체를 만들기 위해서 사용
// 다량으로, 안전하고, 정확하게

class Calculator {
    /* constructor (a, b) {
        this.a = a;
        this.b = b;
    }*/ 

    // 인스턴스화 시키지 않았지만 'static' 키워드에 의해서 add 메서드 바로 호출 가능
    static add (a, b) {
        console.log('[계산기] 더하기를 진행합니다.');
        return a + b;
    }

    static sub (a, b) {
        console.log('[계산기] 빼기를 진행합니다.');
        return a - b;
    }
}

console.log(Calculator.add(3, 5));
console.log(Calculator.sub(3, 5));