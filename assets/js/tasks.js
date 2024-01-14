var tasks = [];
var listTasks = document.getElementById("tasks");

function addTask() {
  var newTask = document.getElementById("new-task").value;
  tasks.push(newTask);
  // Limpa a lista antes de adicionar as tarefas para evitar duplicatas
  listTasks.innerHTML = "";
  for (var i = 0; i < tasks.length; i++) {
    listTasks.innerHTML +=
      "<ul>" +
      tasks[i] +
      " <button onclick='removeTask(" +
      i +
      ")'>X</button></ul>";
  }
}

function removeTask(index) {
  tasks.splice(index, 1); // Remove a tarefa do array
  var listTasks = document.getElementById("tasks");
  // Atualiza a lista após remover a tarefa
  listTasks.innerHTML = "";
  for (var i = 0; i < tasks.length; i++) {
    listTasks.innerHTML +=
      "<ul>" +
      tasks[i] +
      " <button onclick='removeTask(" +
      i +
      ")'>X</button></ul>";
  }
}
