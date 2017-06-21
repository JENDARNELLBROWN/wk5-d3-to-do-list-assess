var taskInput = document.getElementById("new-task");
var addButton = document.getElementsByTagName("button")[0];
var incompleteTasksHolder = document.getElementById("incomplete-tasks");
var completedTasksHolder = document.getElementById("completed-tasks");

var createNewTaskElement = function(taskString) {
  var listItem = document.createElement("li");

  var checkBox = document.createElement("input"); 
  var label = document.createElement("label");
  var editInput = document.createElement("input"); 
  var editButton = document.createElement("button");
  var deleteButton = document.createElement("button");
  
  
  checkBox.type = "checkbox";
  editInput.type = "text";
  
  editButton.innerText = "Edit";
  editButton.className = "edit";
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";
  
  label.innerText = taskString;
  
  return listItem;
}

var addTask = function() {
  console.log("Add task...");
  var listItem = createNewTaskElement(taskInput.value);
 
  taskInput.value = "";   
}



  




























