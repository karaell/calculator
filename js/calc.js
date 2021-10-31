function calc (a,b,operator) {
    let result;
    if ( !a || !b || (typeof a != 'number') || (typeof b != 'number')  ) {
        result = "Error";
    } else if (b === 0) {
        result = "Error. Division by zero is not possible"
    } else if (!operator) {
        result = "Unknown operation"
    } else if (operator ===("+")) {
        result = a+b;
    } else if (operator === ("-")) {
        result = a-b; 
    } else if (operator === ("*")) {
        result = a*b;
    } else if (operator === ("/")) {
        result = a/b;
        if (b===0) { 
            result = "Error! Division by zero is not possible"}
    }  
    return result;
}

calc(5,2,"-");
console.log( calc(5,2,"-") );