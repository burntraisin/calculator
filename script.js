// BASIC MATH OPERATORS

function add(a, b) {
    a = +a;
    b = +b;
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    a = +a;
    b = +b;
    return a / b;
}

function operate(operator, a, b) {
    return operator(a, b);
}

// DISPLAY

const container = document.querySelector(".display");
let displayValue = "";

let point = document.getElementById("point");
point.addEventListener("click", () => {
    container.textContent += ".";
    displayValue += ".";
});

let numZero = document.getElementById("zero");
numZero.addEventListener("click", () => {
    container.textContent += "0";
    displayValue += "0";
});

let numOne = document.getElementById("one");
numOne.addEventListener("click", () => {
    container.textContent += "1";
    displayValue += "1";
});

let numTwo = document.getElementById("two");
numTwo.addEventListener("click", () => {
    container.textContent += "2";
    displayValue += "2";
});

let numThree = document.getElementById("three");
numThree.addEventListener("click", () => {
    container.textContent += "3";
    displayValue += "3";
});

let numFour = document.getElementById("four");
numFour.addEventListener("click", () => {
    container.textContent += "4";
    displayValue += "4";
});

let numFive = document.getElementById("five");
numFive.addEventListener("click", () => {
    container.textContent += "5";
    displayValue += "5";
});

let numSix = document.getElementById("six");
numSix.addEventListener("click", () => {
    container.textContent += "6";
    displayValue += "6";
});

let numSeven = document.getElementById("seven");
numSeven.addEventListener("click", () => {
    container.textContent += "7";
    displayValue += "7";
});

let numEight = document.getElementById("eight");
numEight.addEventListener("click", () => {
    container.textContent += "8";
    displayValue += "8";
});

let numNine = document.getElementById("nine");
numNine.addEventListener("click", () => {
    container.textContent += "9";
    displayValue += "9";
});

// WHEN OPERATOR IS PRESSED

let operation;
let firstValue;

let division = document.getElementById("divide");
division.addEventListener("click", () => {
    if (operation == "multiply") {
        let solution = operate(multiply, firstValue, displayValue)
        solution = Math.round(100 * solution) / 100;
        container.textContent = solution;
        displayValue = solution;
    }
    if (operation == "subtract") {
        let solution = operate(subtract, firstValue, displayValue);
        solution = Math.round(100 * solution) / 100;
        container.textContent = solution;
        displayValue = solution;
    }
    if (operation == "add") {
        let solution = operate(add, firstValue, displayValue);
        solution = Math.round(100 * solution) / 100;
        container.textContent = solution;
        displayValue = solution;
    }
    if (operation == "divide") {
        let solution = operate(divide, firstValue, displayValue);
        solution = Math.round(100 * solution) / 100;
        container.textContent = solution;
        displayValue = solution;
    }
    firstValue = +displayValue; //convert displayValue string into a number
    operation = "divide";
    container.textContent += " ÷ ";
    displayValue = ""; //reset displayValue to none
});

let multiplication = document.getElementById("times");
multiplication.addEventListener("click", () => {
    if (operation == "divide") {
        let solution = operate(divide, firstValue, displayValue);
        solution = Math.round(100 * solution) / 100;
        container.textContent = solution;
        displayValue = solution;
    }
    if (operation == "subtract") {
        let solution = operate(subtract, firstValue, displayValue);
        solution = Math.round(100 * solution) / 100;
        container.textContent = solution;
        displayValue = solution;
    }
    if (operation == "add") {
        let solution = operate(add, firstValue, displayValue);
        solution = Math.round(100 * solution) / 100;
        container.textContent = solution;
        displayValue = solution;
    }
    if (operation == "multiply") {
        let solution = operate(multiply, firstValue, displayValue)
        solution = Math.round(100 * solution) / 100;
        container.textContent = solution;
        displayValue = solution;
    }
    firstValue = +displayValue;
    operation = "multiply";
    container.textContent += " x ";
    displayValue = "";
});

let subtraction = document.getElementById("minus");
subtraction.addEventListener("click", () => {
    if (operation == "divide") {
        let solution = operate(divide, firstValue, displayValue);
        solution = Math.round(100 * solution) / 100;
        container.textContent = solution;
        displayValue = solution;
    }
    if (operation == "multiply") {
        let solution = operate(multiply, firstValue, displayValue)
        solution = Math.round(100 * solution) / 100;
        container.textContent = solution;
        displayValue = solution;
    }
    if (operation == "add") {
        let solution = operate(add, firstValue, displayValue);
        solution = Math.round(100 * solution) / 100;
        container.textContent = solution;
        displayValue = solution;
    }
    if (operation == "subtract") {
        let solution = operate(subtract, firstValue, displayValue);
        solution = Math.round(100 * solution) / 100;
        container.textContent = solution;
        displayValue = solution;
    }
    firstValue = +displayValue;
    operation = "subtract";
    container.textContent += " - ";
    displayValue = "";
});

let addition = document.getElementById("plus");
addition.addEventListener("click", () => {
    //if operation equals add (i.e. there is one already in progress) then solve and update firstvalue 
    if (operation == "divide") {
        let solution = operate(divide, firstValue, displayValue);
        solution = Math.round(100 * solution) / 100;
        container.textContent = solution;
        displayValue = solution;
    }
    if (operation == "multiply") {
        let solution = operate(multiply, firstValue, displayValue)
        solution = Math.round(100 * solution) / 100;
        container.textContent = solution;
        displayValue = solution;
    }
    if (operation == "subtract") {
        let solution = operate(subtract, firstValue, displayValue);
        solution = Math.round(100 * solution) / 100;
        container.textContent = solution;
        displayValue = solution;
    }
    if (operation == "add") {
        let solution = operate(add, firstValue, displayValue);
        solution = Math.round(100 * solution) / 100;
        container.textContent = solution;
        displayValue = solution;
    }
    firstValue = +displayValue;
    operation = "add";
    container.textContent += " + ";
    displayValue = "";
});

// WHEN EQUAL IS PRESSED

let solve = document.getElementById("equals");
solve.addEventListener("click", () => {
    if (operation == "divide") {
        let solution = operate(divide, firstValue, displayValue);
        solution = Math.round(100 * solution) / 100;
        container.textContent = solution;
        firstValue = solution;
        operation = "divide";
        displayValue = "1";
    }
    if (operation == "multiply") {
        let solution = operate(multiply, firstValue, displayValue)
        solution = Math.round(100 * solution) / 100;
        container.textContent = solution;
        firstValue = solution;
        operation = "multiply";
        displayValue = "1";
    }
    if (operation == "subtract") {
        let solution = operate(subtract, firstValue, displayValue);
        solution = Math.round(100 * solution) / 100;
        container.textContent = solution;
        firstValue = solution;
        operation = "subtract";
        displayValue = "0";
    }
    if (operation == "add") {
        let solution = operate(add, firstValue, displayValue);
        solution = Math.round(100 * solution) / 100;
        container.textContent = solution;
        firstValue = solution;
        operation = "add";
        displayValue = "0";
    }
});

// WHEN CLEAR IS PRESSED

let clear = document.getElementById("clear");
clear.addEventListener("click", () => {
    container.textContent = "";
    firstValue = "";
    displayValue = "";
    operation = "";
});