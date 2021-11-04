function calc (a, b, operator) {
    let result;
    
    const isNotValidOperand = ( typeof a != 'number' || typeof b != 'number' );
    
    if ( isNotValidOperand ) {
        result = "Error";
    } else if (operator === "sum") {
        result = a + b;
    } else if (operator === "sub") {
        result = a - b; 
    } else if (operator === "mult") {
        result = a * b;
    } else if (operator === "exp") {
         result = a ** b;
    } else if (operator === "div") {
        if (b === 0) { 
            result = "Error! Division by zero is not possible";
        } else {
            result = a / b;
        } 
    } else if (operator === "rem") {
        if (b === 0) { 
            result = "Error! Division by zero is not possible";
        } else {
            result = a % b;
        }   
    }  else {
        result = "Unknown operation";
    }

    return result;
}

console.log(calc());

