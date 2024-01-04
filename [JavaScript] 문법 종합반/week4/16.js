// 콜백 함수의 근본적인 해결법
// 비동기적 작업 동기적으로 처리
// promise, generator, async/await

// 1. promise : 비동기적 -> 동기적

// refactoring
// re : 다시
// factoring
// 비효율적인 코드를 효율적인 코드로 바꾸는 작업

var addCoffee = function (name) {
    return function (prevName) {
        // 이 안에서도 새롭게 promise를 만들어요 : 체이닝
        return new Promise(function (resolve) {
            setTimeout(function () {
                // 백틱(``)
                var newName = prevName ? `${prevName}, ${name}` : name;
                //var name = prevName + ', ' + name;
                console.log(newName);
                resolve(newName);
            }, 500);
        });
    }
}


// addCoffee('에스프레소')();
/* function (name) {
    return function (prevName) {
        // 이 안에서도 새롭게 promise를 만들어요 : 체이닝
        return new Promise(function (resolve) {
            setTimeout(function () {
                // 백틱(``)
                var newName = prevName ? `${prevName}, ${name}` : name;
                //var name = prevName + ', ' + name;
                console.log(newName);
                resolve(newName);
            }, 500);
        });
    }
} */ 
// 이 함수를 괄호 열고 닫아서 실행해야 
/* new Promise(function (resolve) {
            setTimeout(function () {
                // 백틱(``)
                var newName = prevName ? `${prevName}, ${name}` : name;
                //var name = prevName + ', ' + name;
                console.log(newName);
                resolve(newName);
            }, 500);
        }); */
// 얘만 return

addCoffee('에스프레소')()
.then(addCoffee('아메리카노'))
.then(addCoffee('카페모카'))
.then(addCoffee('카페라떼'));