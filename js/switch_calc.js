function calc (a, b, operator) {
        
    const isValidOperand = ( typeof a === 'number' && typeof b === 'number' )
    
    if ( isValidOperand ) {
    switch (operator) {
        case "+" :
            return a + b;

        case "-" :
            return a - b;
        
        case "*" :
            return a * b;

        case "/" :
            if (b === 0) { 
                return "Error! Division by zero is not possible";
            } else {
                result = a / b;
            }
        default:
            return "Unknown operation"
        }
    } else {
        return "Error";
    }
} 

console.log( calc());