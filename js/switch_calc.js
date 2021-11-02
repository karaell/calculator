function calc (a, b, operator) {
        
    const isValidOperand = ( (typeof a === 'number') && (typeof b === 'number')  && isFinite(a) && isFinite(b) )
    
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

console.log( calc(1, NaN, "/")); // Error
console.log( calc(1, 0, "/")); // Infinity ??
console.log( calc(1, 2, "=")); // Unknown operation
console.log( calc(1, 0, null)); // Unknown operation
console.log( calc(null, 2, "+")) // Error