class Calculator {
  add = (x, y) => {
    let z;
    if (typeof x === "number" && typeof y === "number") {
      z = x + y;
    } else {
      console.log != "undefined";
    }
    return z;
  };

  subtract = (x, y) => {
    let z;
    if (typeof x === "number" && typeof y === "number") {
      z = x - y;
    } else {
      console.log != "undefined";
    }
    return z;
  };

  multiply = (x, y) => {
    let z;
    if (typeof x === "number" && typeof y === "number") {
      z = x * y;
    } else {
      console.log != "undefined";
    }
    return z;
  };

  divide = (x, y) => {
    let z;
    if (typeof x === "number" && typeof y === "number") {
      z = x / y;
    } else {
      console.log != "undefined";
    }
    return z;
  };
}
divide = (x, y) => {
  let z;
  if (typeof x === "number" && typeof y === "number") {
    z = x / y;
  } else {
    console.log != "undefined";
  }
  return z;
};

module.exports = Calculator;