function buildFun(n){

	var res = [];

	
  for (var i = 0; i< n; i++){
    let j=i;
		res.push(function(){
			console.log(j)
		})
	}

	return res;
  
}

let fun = buildFun(10);

fun[0]();
fun[1]();
fun[2]();
fun[3]();


/* 
массив должен состоять из функций, а не [0,1,2,3,4....n]
А вызов этих функций уже должен возвращать эти значения */
