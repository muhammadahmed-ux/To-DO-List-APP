var tasks = [];


function addTask(){

  var input = document.getElementById("task-input");

  var text = input.value.trim();

  if(text ===""){
    alert("Write Something!");
    return;
  }

  tasks.push(text);
  input.value = "";
  showTasks();

  console.log(tasks);
  
}


function editTask(i){
  var update = prompt("Edit task", tasks[i]);

  if(update !== null && update.trim() !== ""){
    tasks[i] = update.trim();
    showTasks();
  }
}

function deleteTask(i){
  tasks.splice(i,1);
  showTasks();
}


function showTasks(){

  var list = document.getElementById("Task-List");
  list.innerHTML = "";

  for(var i = 0; i < tasks.length; i++){
    list.innerHTML += "<li>" + tasks[i]+ " <button onclick='editTask("+i+")'>Edit</button>" + "<button onclick='deleteTask("+i+")'>Delete</button></li>";
  }
}