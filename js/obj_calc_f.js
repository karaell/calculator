function calc (a, b, operator) {

    const isNotValidOperand = ( typeof a !== 'number' || typeof b !== 'number' );
    const isNotValidDivision = ( b === 0 && ( operator == 'div' || operator == 'rem') );
    
    let operations = {
        sum: function (a, b) 
            { return a + b },

        sub: function (a, b) 
            { return a - b },

        mult: function (a, b) 
            { return a * b },

        div: function (a, b) {
            if (b === 0) {
                return "Error! Division by zero is not possible"
            } else { return a / b }
            },

        exp: function (a, b) 
            { return a ** b },

        rem: function (a, b) {
            if (b === 0) {
                return "Error! Division by zero is not possible"
            } else { return a % b }    
    
    
        
            

}; // закрывающая скобка функции calc



const answer = operations[operation](a, b);

if (operation === undefined || a === undefined || b === undefined ) {
    return 'Error';
} else if ( !isFinite (answer)) {
    return 'Error';
} else if (!(operation in operations)) return "unknown operation";

  return answer;