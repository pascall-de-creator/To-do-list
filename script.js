var listId = 0

function addItem() {
  
  var el = document.getElementById("mask")
  var timeSet = Date.now()
  var input = document.getElementById("taskInput")
  var timeInput = document.getElementById("taskTime")
  var tasks = document.getElementById("tasks")
  var closeBtn = document.createElement("span");
  var task = document.createElement("div");
  var taskName = document.createElement("p");
  var setTime = document.createElement("p");
  
  task.className = "task"
  taskName.className = "TaskName"
  setTime.className = "setTime"
  closeBtn.className = "closeBtn"
  
  tasks.appendChild(task)
  task.appendChild(closeBtn)
  task.appendChild(taskName)
  task.appendChild(setTime)
  if (input.value != ""){
    if (timeInput.value == ""){
      setTime.innerText = "undefined"
    } else {
      setTime.innerText = timeInput.value
    }
    taskName.innerText = input.value
    closeBtn.innerText = "✖"
    
    el.style.display = "none";
  } else {
    alert("input must be filled")
    task.style.display = "none";
    el.style.display = "none";
  }
  
  closeBtn.addEventListener('click', function(){
    closeBtn.parentNode.style.display = "none";
  }, false);
  input.value = ""
  timeInput.value = ""

}
function showPrompt(){
  var el = document.getElementById("mask")
  el.style.display = "flex";
}