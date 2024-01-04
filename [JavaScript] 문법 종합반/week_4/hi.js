var items = [
    { name: "Edward", age: 21 },
    { name: "Sharpe", age: 37 },
    { name: "And", age: 45 },
    { name: "The", age: -12 },
    { name: "Magnetic", age: 13 },
    { name: "Zeros", age: 37 },
  ];
  items.sort(function(a, b) {
      return a['age'] - b['age'];
  });

  console.log(items)