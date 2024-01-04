// 화살표 함수로도 가능

var addCoffee = (name) => {
    return function (prevName) {
        // 이 안에서도 새롭게 promise를 만들어요 : 체이닝
        return new Promise(function (resolve) {
            setTimeout(function () {

                // if (newName) {

                // } else {

                // }
                
                var newName = prevName ? `${prevName}, ${name}` : name;
                //var name = prevName + ', ' + name;
                console.log(newName);
                resolve(newName);
            }, 500);
        });
    }
}

addCoffee('에스프레소')()
.then(addCoffee('아메리카노'))
.then(addCoffee('카페모카'))
.then(addCoffee('카페라떼'));