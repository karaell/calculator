function calc (a, b, operator) {
    let result;
    
    const isNotValid = ( a === undefined || b === undefined || typeof a != 'number' || typeof b != 'number' );  //Проблема только с null

    if ( isNotValid ) {
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