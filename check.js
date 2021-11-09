/* //Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
function ucFirst(str) {
    //if (!str) return str; // если пустая строка - вернет пустую строку, иначе - undefined
    return newStr = str.charAt(0).toUpperCase() + str.slice(1)
}

console.log (ucFirst("")) */

/* Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

Функция должна быть нечувствительна к регистру:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false 

function checkSpam(str) {
    
    let newStr = str.toLowerCase();
    
    if ( newStr.includes('viagra') || newStr.includes('xxx') ) {
        return true;
    } else {return false}
}

console.log (checkSpam('buy ViAgRA now'));
console.log (checkSpam('free xxxxx'))
console.log (checkSpam("innocent rabbit")) */


/* Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка. */

/* function truncate (str, maxlength) {
    str.length;

    if (str.length > maxlength) {
        let newStr = str.substr (0, maxlength - 1);
        return newStr + "...";
    } else { return str }
}
console.log (truncate ('Hello', 3))

function truncate(str, maxlength) {
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + '…' : str;
  } */

  let str = "Hello";

  for (let char of str) {
      console.log (char)
  }
