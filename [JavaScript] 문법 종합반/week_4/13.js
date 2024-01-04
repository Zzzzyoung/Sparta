setTimeout(
    function (name) {
      var coffeeList = name;
      console.log(coffeeList);
  
      setTimeout(
        function (name) {
          coffeeList += ", " + name;
          console.log(coffeeList);
  
          setTimeout(
            function (name) {
              coffeeList += ", " + name;
              console.log(coffeeList);
  
              setTimeout(
                function (name) {
                  coffeeList += ", " + name;
                  console.log(coffeeList);
                },
                500,
                "카페라떼"
              );
            },
            500,
            "카페모카"
          );
        },
        500,
        "아메리카노"
      );
    },
    500,
    "에스프레소"
  );

  // 바깥쪽부터 출력
  // 0.5초가 지나야 안쪽 실행
  // log가 찍히고 안쪽 실행