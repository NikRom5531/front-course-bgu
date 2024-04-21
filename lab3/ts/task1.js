var todo = {
    title: "My Todo Title",
    description: "My Todo Description"
};
function createTodo() {
    var titleInput = document.getElementById("titleInput");
    var descriptionInput = document.getElementById("descriptionInput");
    var title = titleInput.value.trim();
    var description = descriptionInput.value.trim();
    // Проверяем, что оба поля не пустые
    if (!title || !description) {
        alert("Пожалуйста, заполните все поля");
        return null;
    }
    return {
        title: title,
        description: description
    };
}
function addTodoToList(todo) {
    var todoList = document.getElementById("todoList");
    var listItem = document.createElement("li");
    listItem.textContent = "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435: ".concat(todo.title, ", \u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435: ").concat(todo.description);
    todoList.appendChild(listItem);
}
document.getElementById("todoForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var newTodo = createTodo();
    if (newTodo) {
        addTodoToList(newTodo);
        document.getElementById("todoForm").reset();
    }
});
var titleElement = document.getElementById("title");
var descriptionElement = document.getElementById("description");
titleElement.innerText = todo.title;
descriptionElement.innerText = todo.description;
