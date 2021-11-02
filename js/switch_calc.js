function calc (a, b, operator) {
        
    const isValidOperand = ( (typeof a === 'number') && (typeof b === 'number')  && b != 0 )
    
    if ( isValidOperand ) {
    switch (operator) {
        case "+" :
            return a + b;

        case "-" :
            return a - b;
        
        case "*" :
            return a * b;

        case "/" :
            return a / b;

        default:
            return "Unknown operation"
        }
    } else {
        return "Error";
    }
} 

console.log( calc());