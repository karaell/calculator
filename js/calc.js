function calc (a, b, operator) {
    let result;
    
    const isNotValidOperand = ( typeof a != 'number' || typeof b != 'number' );
    
    if ( isNotValidOperand ) {
        result = "Error";
    } else if (operator === "+") {
        result = a + b;
    } else if (operator === "-") {
        result = a - b; 
    } else if (operator === "*") {
        result = a * b;
    } else if (operator === "/") {
        if (b === 0) { 
            return "Error! Division by zero is not possible";
        } else {
            result = a / b;
        }
    }  else {
        result = "Unknown operation";
    }

    return result;
}

console.log(calc());

