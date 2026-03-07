const loadTodo = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const todo = await res.json();
    console.log(todo);
    displayTodo(todo);
  } catch (error) {
    console.log("Error:", error);
  }
};
const displayTodo = (todos) => {
  const todoContainer = document.getElementById("todo-container");
  todoContainer.innerHTML = "";
  todos.forEach((todo) => {
    console.log(todo);
    const todoCard = document.createElement("div");
    todoCard.classList.add("todo-card");
    todoCard.innerHTML = `
      <p>${
        todo.completed == true
          ? `<i class="fa-solid fa-square-check"></i>`
          : `<i class="fa-solid fa-square"></i>`
      }</p>
      <h4>${todo.title}</h4>
  `;
    todoContainer.append(todoCard);
  });
};
loadTodo();
