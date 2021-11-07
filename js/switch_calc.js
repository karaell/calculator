function calc (a, b, operator) {
        
    const isValidOperand = ( typeof a === 'number' && typeof b === 'number' );
    
    if ( isValidOperand ) {
    switch (operator) {
        case "sum" :
            return a + b;

        case "sub" :
            return a - b;
        
        case "mult" :
            return a * b;

        case "div" :
            if (b === 0) { 
                return "Error! Division by zero is not possible";
            } else {
                return a / b;
            }

        case "exp" :
            return a ** b;
        
        case "rem" :
            if (b === 0) { 
                return "Error! Division by zero is not possible";
            } else {
                return a % b;
            }

        default:
            return "Unknown operation";
        }
    } else {
        return "Error";
    }
} 

console.log( calc());


