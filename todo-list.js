const taskList = [];
const addTask = (input) => {
  let newTask$$ = document.createElement("li");
  let taskText$$ = document.createElement("span");
  let deleteBtn$$ = document.createElement("button");
  
  taskText$$.innerText = `${input}`;
  deleteBtn$$.innerText = "-";
  
  deleteBtn$$.addEventListener("click", () => {
    taskList.splice(taskList.indexOf(newTask$$), 1); 
    newTask$$.remove();
  });
  
  newTask$$.appendChild(taskText$$);
  newTask$$.appendChild(deleteBtn$$);
  
  taskList.push(newTask$$);
};

btnAdd$$.addEventListener("click", (event) => {
  event.preventDefault(); // Evita la recarga de la página
  addTask(inputToDo$$.value);
  for (let i = 0; i < taskList.length; i++) {
    const tasks = taskList[i];
    ulToDo$$.appendChild(tasks);
    console.log(tasks);
  }
  inputToDo$$.value = "";
});


const showTasks = () => {
  main0$$.style.display = "block";
  main1$$.style.display = "none";
  headerDiv$$.style.display = "none";
}


allTasks$$.addEventListener("click", ()=> showTasks() )