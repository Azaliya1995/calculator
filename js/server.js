let numbers = document.querySelectorAll(".number");
let operations = document.querySelectorAll(".operation");
let decimal = document.getElementById("decimal");
let equal = document.getElementById("result");
let clear = document.getElementById("reset");
let division = document.getElementById("division");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let multiply = document.getElementById("multiply");

let display = document.getElementById("display");

let currentValue = 0;
let res = 0;
//let operand = 0;

let operator = "";
let inputChanged = false;

for (let i = 0; i < numbers.length; i++) {
  //numbers
  numbers[i].addEventListener("click", function(event) {
    currentValue = parseInt(currentValue) * 10 + parseInt(event.target.value);
    inputChanged = true;
    if (operator === "") {
      res = currentValue;
      display.value = res;
    } else {
      display.value = currentValue;
    }
  });
}

division.addEventListener("click", function(event) {
  //decimal
  if (inputChanged) {
    if (operator !== "") {
      res = res / currentValue;
      display.value = res;
    }
    operator = "division";
    currentValue = 0;
    inputChanged = false;
  }
});

plus.addEventListener("click", function(event) {
  if (inputChanged) {
    if (operator !== "") {
      res = res + currentValue;
      display.value = res;
    }
    operator = "plus";
    currentValue = 0;
    //inputChanged = false;
  }
});

minus.addEventListener("click", function(event) {
  if (inputChanged) {
    if (operator != "") {
      res = res - currentValue;
      display.value = res;
    }
    currentValue = 0;
    operator = "minus";
    //inputChanged = false;
  }
});

multiply.addEventListener("click", function(event) {
  if (inputChanged) {
    if (operator != "") {
      res = res * currentValue;
      display.value = res;
    }
    currentValue = 0;
    operator = "multiply";
    //inputChanged = false;
  }
});

equal.addEventListener("click", function(dec) {
  //equal
  display.value = res;
  if (operator === "division" && currentValue > 0) {
    display.value = res / currentValue;
    // деление на 0
  } else if (operator === "division" && currentValue === 0) {
    display.value = "error";
  } else if (operator === "plus") {
    display.value = res + currentValue;
  } else if (operator === "minus") {
    display.value = res - currentValue;
  } else if (operator === "multiply" || currentValue != 0) {
    display.value = res * currentValue;
  }
});

clear.addEventListener("click", function(reset) {
  //clean
  display.value = 0;
  currentValue = 0;
  operator = "";
});

/*

let getDisplayedText = function() {
  let display = document.getElementById("display");

  return display.value;
};


//console.log(getDisplayedText());

let setDisplayedText = function(text) {
  let display = document.getElementById("display");
  display.value = text;
};

//setDisplayedText(4);
*/
