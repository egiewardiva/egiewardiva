const calculator = {
displayvalue:'0',
firstoperand: null,
waitingforsecondoperand: false,
operator: null,
};
function inputdigit(digit) {
const { displayvalue,waitingforsecondoperand} = calculator;
if (waitingforsecondoperand === true) {
calculator.displayvalue = digit;
calculator.waitingforsecondoperand = false;
} else {
    calculator.displayvalue = displayvalue === '0'  ? digit : displayvalue + digit;
}
}

function inputdecimal (dot) {
    if (calculator.waitingforsecondoperand === true) {
        calculator.displayvalue = "0."
        calculator.waitingforsecondoperand = false;
return
    }
if (!calculator.displayvalue.includes(dot)) {
    calculator.displayvalue += dot;
}
}
function handleoperator(nextoperator) {
 const { firstoperand, displayvalue, operator} = calculator
 const inputvalue = parseFloat (displayvalue);
if (operator && calculator.waitingforsecondoperand) {     
    calculator.operator = nextoperator;
return  
}
if (firstoperand == null && !isNaN(inputvalue)) {
 calculator.firstoperand = inputvalue
} else if (operator) {
 const result = calculate(firstoperand, inputvalue, operator);
 calculator.displayvalue = '${parsefloat(result.tofixed(7))}';
calculator.firstoperand = result;
}
calculator.waitingforsecondoperand = true;
calculator.operator = nextoperator;
}
function calculate(firstoperand, secondoperand, operator) {
    if ( operator=== '+') {

    return firstoperand + secondoperand;
    } else if (operator === '-') {
        return firstoperand - secondoperand;
    } else if (operator === '*') {
        return firstoperand * secondoperand;
    } else if (operator === '/') {
    return firstoperand / secondoperand;
    }
    return secondoperand;
}
function resetcalculator() {
calculator.displayvalue = '0';
calculator.firstoperand = null;
calculator.waitingforsecondoperand = false;
calculator.operator = null;
}

 function updatedisplay() {
const display = document.querySelector('.calculator-screen');
display.value = calculator.displayvalue;
}
updatedisplay();
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', event => {
    const {target} = event;
    const {value} = target;
    if (!target.matches('button')) {
        return;
    }
    switch (value) {
        case '+':
         case '-':
          case '*':
          case '/':
              case '=':
                  handleoperator(value);
                  break;
                  case '.':
                      inputdecimal(value);
                      break;
                      case 'all-clear':
                          resetcalculator();
                          break;
                          default:
                              if (Number.isInteger(parseFloat(value))) {
                                  inputdigit(value);
                              }
                            }
                            updatedisplay();
                        });

        

