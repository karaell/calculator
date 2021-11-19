const list = [ ] 

function addTask ( task ) {
  list.push({ 
    id: list.length + 1, 
    name: task, 
    status: 'TODO', 
    priority: 'low',
   });
}

function deleteTask ( task ) {
  let findTask = list.findIndex (item => item.name === task);

  list.splice(findTask, 1);
}

function changeStatus ( task, status ) {
  list.filter (function (item) {
    if (item.name === task) {
    return (item.status = status);
    }
  });
}

function changePriority ( task, priority ) {
  list.filter (function (item) {
    if (item.name === task) {
      return (item.priority = priority);
    }
  });
} 

function showList () {
  let count = 0;

  console.log ("To Do:");
    list.filter( function(item) {
    if (item.status === 'TODO') {
      console.log (` '${item.name}' `);
      count++;
    }; 
  });

  if (count === 0) {
      console.log ('-');
    }
    count = 0;

  console.log ("In Progress:");
  list.filter( function(item) {
    if (item.status === 'In Progress') {
      console.log (` '${item.name}' `);
      count++;
    };  
  });

  if (count === 0) {
      console.log ('-');
    }
    count = 0;

  console.log ("Done:");
  list.filter( function(item) {
    if (item.status === 'Done' ) {
      console.log (` '${item.name}' `);
      count++;
    };
  });

  if (count === 0) {
      console.log ('-');
    }
}

addTask ("first")
addTask("second")
addTask ("third")
changeStatus("first", "In Progress")
changeStatus("second", "Done")


//console.log (list)

showList()


