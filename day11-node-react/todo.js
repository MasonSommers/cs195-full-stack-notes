// Update a todo list
function addTodo(text) {
  // 1. Update your data
  todos.push({ id: Date.now(), text: text, done: false });

  // 2. Manually create DOM elements
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const span = document.createElement("span");
  span.textContent = text;
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  // 3. Add event listeners
  checkbox.addEventListener("change", () => {
    // Update data
    todos.find((t) => t.id === id).done = checkbox.checked;
    // Update display manually
    span.style.textDecoration = checkbox.checked ? "line-through" : "none";
  });

  deleteBtn.addEventListener("click", () => {
    // Remove from data
    todos = todos.filter((t) => t.id !== id);
    // Remove from DOM
    li.remove();
  });

  // 4. Assemble and insert
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);
  document.getElementById("todo-list").appendChild(li);
}
