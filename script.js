// Select HTML elements

const num1 = document.getElementById("num1");

const num2 = document.getElementById("num2");

const result = document.getElementById("result");

const addBtn = document.getElementById("add");

const subtractBtn = document.getElementById("subtract");

const multiplyBtn = document.getElementById("multiply");

const divideBtn = document.getElementById("divide");

// Addition
addBtn.addEventListener("click", function(){

    let number1 = Number(num1.value);

    let number2 = Number(num2.value);

    let answer = number1 + number2;

    result.innerHTML = "Result : " + answer;

});

// Subtraction
subtractBtn.addEventListener("click", function(){

    let number1 = Number(num1.value);

    let number2 = Number(num2.value);

    let answer = number1 - number2;

    result.innerHTML = "Result : " + answer;

});

// Multiplication
multiplyBtn.addEventListener("click", function(){

    let number1 = Number(num1.value);

    let number2 = Number(num2.value);

    let answer = number1 * number2;

    result.innerHTML = "Result : " + answer;

});

// Division
divideBtn.addEventListener("click", function(){

    let number1 = Number(num1.value);

    let number2 = Number(num2.value);

    if(number2 == 0){

        result.innerHTML = "Cannot divide by zero!";

    }

    else{

        let answer = number1 / number2;

        result.innerHTML = "Result : " + answer;

    }

});