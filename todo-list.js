
const addTask = (input) => {
  let newTask$$ = document.createElement("li");
  let taskText$$ = document.createElement("span");
  let deleteBtn$$ = document.createElement("button");
  
  taskText$$.innerText = `${input}`;
  deleteBtn$$.innerHTML = `<i class="fa-solid fa-dumpster"></i>`;
  
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
  }
  inputToDo$$.value = "";
});


const showTasks = () => {
  h1$$.innerText = "Your library! make your notes!";
  match$$.style.display = "none";
  main0$$.style.display = "block";
  main1$$.style.display = "none";
  headerDiv$$.style.display = "none";
  body$$.style.backgroundImage = 'url("./public/img/background-library.jpeg")';
  allTasks$$.style.backgroundImage = 'url("./public/img/open.png")';
  allTasks$$.style.width = "50%";
  allTasks$$.style.maxWidth = "340px";
  allTasks$$.style.maxHeight = "200px";
  allPokemon$$.style.backgroundImage = 'url("./public/img/pokeball.png")';
  allPokemon$$.style.width = "100px";
}


allTasks$$.addEventListener("click", ()=> showTasks() )