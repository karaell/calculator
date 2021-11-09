function showVerticalMessage (str) {
    
    let newStr = str.charAt(0).toUpperCase() + str.slice(1);
       
    if (newStr.length > 10) {
        newStr = newStr.slice (0, 10);
    } else { 
        newStr;
    }; 
    
    
    for (let char of newStr) {
        console.log (char);
    }
    
}

showVerticalMessage ("марафон")
showVerticalMessage ("1234567890111")
showVerticalMessage ("1234567890")