interface Todo {
  title: string;
  description: string;
}

const todo: Todo = {
  title: "My Todo Title",
  description: "My Todo Description"
};

function createTodo(): Todo | null {
  const titleInput = document.getElementById("titleInput") as HTMLInputElement;
  const descriptionInput = document.getElementById("descriptionInput") as HTMLInputElement;

  const title = titleInput.value.trim();
  const description = descriptionInput.value.trim();

  // Проверяем, что оба поля не пустые
  if (!title || !description) {
    alert("Пожалуйста, заполните все поля");
    return null;
  }

  return {
    title,
    description
  };
}

function addTodoToList(todo: Todo) {
  const todoList = document.getElementById("todoList") as HTMLUListElement;
  const listItem = document.createElement("li");
  listItem.textContent = `Название: ${todo.title}, Описание: ${todo.description}`;
  todoList.appendChild(listItem);
}

document.getElementById("todoForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const newTodo = createTodo();
  if (newTodo) {
    addTodoToList(newTodo);
    (document.getElementById("todoForm") as HTMLFormElement).reset();
  }
});

const titleElement = document.getElementById("title") as HTMLSpanElement;
const descriptionElement = document.getElementById("description") as HTMLSpanElement;

titleElement.innerText = todo.title;
descriptionElement.innerText = todo.description;
