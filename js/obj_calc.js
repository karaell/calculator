function calc (a, b, operator) {

    const isNotValidOperand = ( typeof a !== 'number' || typeof b !== 'number' );
    const isNotValidDivision = ( b === 0 && ( operator == 'div' || operator == 'rem') );

    let operations = {
        sum: a + b,
        sub: a - b,
        mult: a * b,
        div: a / b,
        exp: a ** b,
        rem: a % b,
    }

    if ( isNotValidOperand ) {
        return 'Error';
    } else if ( isNotValidDivision ) {
        return 'Error! Division by zero is not possible' ;
    } else if (operator in operations) {
        return operations[operator] ;
    } else {
        return 'Unknown operation';
    }

}

console.log (calc());


