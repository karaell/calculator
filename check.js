let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
  ];
  
  let user = users.findIndex(item => item.name == "make a bed");
  
 console.log (user); // Вася

