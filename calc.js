const add = function (a, b) {
    return a + b;
  };
  
  const subtract = function (a, b) {
    return a - b;
  };
  
  const sum = function (array) {
    return array.reduce((total, current) => total + current, 0);
  };
  
  const multiply = function (array) {
    return array.reduce((product, current) => product * current)
  };
  
  const power = function (a, b) {
    return Math.pow(a, b);
  };
  
  const factorial = function (n) {
    if (n === 0) return 1;
    let product = 1;
    for (let i = n; i > 0; i--) {
      product *= i;
    }
    return product;
  };

function operate(x, y, operator){
    if(operator === "+"){
        return add(x,y);
    }else if(operator === "-"){
        return subtract(x,y);
    }else if(operator === "*"){
        let arr = [x,y];
        return multiply(arr);
    }else if(operator ==="/"){
        let newY = 1/y;
        let arr = [x,newY];
        return multiply(arr);
    }
}

function display(text){
    const dis = document.getElementsByClassName('result')[0];

    dis.textContent = text;
}
  
const zero = document.getElementById('0');
const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');

const addOp = document.getElementById('+');
const subOp = document.getElementById('-');
const multOp = document.getElementById('*');
const divOp = document.getElementById('/');

let firstNum = '';
let secondNum = '';
let isFirst = true;
let opActive = false;
let noDecimal = true;

let curOp = '';
let sequence = '';

const butCont = document.getElementsByClassName('button-container')[0];
const butClear = document.getElementById('clear');

butClear.addEventListener('click', (event)=>{
    firstNum = '';
    secondNum = '';
    isFirst = true;
     opActive = false;
    noDecimal = true;

    curOp = '';
    
    display("Enter new operation");

})

butCont.addEventListener("click", (event) => {
    const element = event.target;

    const oper = ["+","-","*","/"]

    if((Number(element.id) >= 0 || (element.id === '.' && noDecimal)) && isFirst){
        firstNum += element.id;
        display(firstNum);
    }

    if(element.id === '.'){
        if(noDecimal){
            firstNum+=element.id;
        }
        noDecimal = false;
        display(firstNum);

    }

    if(oper.includes(element.id)){
        curOp = element.id;
        display(firstNum + curOp);
        if(!opActive){
            opActive = true;
            isFirst = false;
        }
        noDecimal = true;
    }

    if((Number(element.id) >= 0 || (element.id === '.' && noDecimal)) && !isFirst){
        secondNum += element.id;
        display(firstNum + curOp + secondNum);
    }

    if(element.id===('equal') && !isFirst){
        firstNum = operate(Number(firstNum),Number(secondNum), curOp);
        display(firstNum);
        secondNum = '';
    }

})





  