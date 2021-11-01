function calc (a, b, operator) {
    let result;
    
    function isNotValidOperand (operand) {
        return typeof operand != 'number' || !isFinite(operand);
    }
    
    if ( isNotValidOperand(a) || isNotValidOperand(b) ) {
        result = "Error";
    } else if (operator === "+") {
        result = a + b;
    } else if (operator === "-") {
        result = a - b; 
    } else if (operator === "*") {
        result = a * b;
    } else if (operator === "/") {
        if (b === 0) { 
            result = "Error! Division by zero is not possible"
        } else {
            result = a / b;
        }
    }  else {
        result = "Unknown operation"
    }

    return result;
}

console.log( calc() ); 
