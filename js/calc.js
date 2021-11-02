function calc (a, b, operator) {
    let result;
    
    function isNotValidOperand (operand) {
        return typeof operand != 'number' || isFinite(operand);
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
        result = a / b;
    }  else {
        result = "Unknown operation";
    }

    return result;
}

console.log(calc(5))


/* console.log( calc(1, NaN, "/")); // Error
console.log( calc(1, 0, "/")); //Error
console.log( calc(1, 2, "=")); 
console.log( calc(1, 0, null));
console.log( calc(null, 2, "+")); */
