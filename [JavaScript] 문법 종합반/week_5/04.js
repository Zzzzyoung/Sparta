// Getters와 Setters
// 객체지향 프로그래밍 언어 -> G, S에 대한 기본적인 개념 존재
// 클래스 --> 객체(인스턴스) 만듦
// 인스턴스 내에 있는 프로퍼티 --> constructor에서 정의
// new Class(a, b, c)

// 내부적으로 가지고 있는 변수인 height와 width를 외부에서 사용하고 세팅해야 하는데,
// 내부적인 변수이기 때문에 직접적으로 하는 것은 위험하고 검증 어려움

// Setter : 외부로부터 값이 들어왔을 때 내부적으로 검증한 후 setting 가능

class Rectangle {
    constructor(height, width) {
        // underscore : private(은밀하고 감춰야 할 때)
        // 인스턴스 내에서만 쓰이기 위한 변수로서 분리해놓겠다.
        this._height = height;
        this._width = width;
    }

    // height를 위한 getter
    get height () {
        return this._height
    }

    // height를 위한 setter
    set height (value) {
        // 검증 : value가 음수이면 오류
        if (value <= 0) {
            console.log('[오류] 세로 길이는 0보다 커야합니다.');
            return;
        } else if (typeof value !== 'number') {
            console.log('[오류] 세로 길이로 입력된 값이 숫자가 아닙니다.')
            return;
        }
        this._width = value;

    }

    // width를 위한 getter
    get width () {
        return this._height
    }

    // width를 위한 setter
    set width (value) {
        if (value <= 0) {
            console.log('[오류] 가로 길이는 0보다 커야합니다.');
            return;
        } else if (typeof value !== 'number') {
            console.log('[오류] 가로 길이로 입력된 값이 숫자가 아닙니다.')
            return;
        }
        this._width = value;
    }

    // getArea : 가로 * 세로 => 넓이
    getArea () {
        console.log(`넓이는 ${this._height * this._width}입니다.`);
    }
}

// instance 생성
const rect1 = new Rectangle(10, 20);
// const rect2 = new Rectangle(10, 30);
// const rect3 = new Rectangle(15, 20);

// 무한 루프 (51->43번째 줄)
// -> 콜스택에 쌓이는 실행 컨텍스트 사이즈가 너무 커져서 맥시멈을 초과했다.
// -> _ 붙여주기

rect1.getArea();