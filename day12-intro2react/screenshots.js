// most of this code exists to use as screenshots in the slides.

function addTask() {
  const input = document.getElementById("taskInput");
  const li = document.createElement("li");
  li.textContent = input.value;
  document.getElementById("taskList").appendChild(li);
}

const colors = ["red", "green", "blue"];

// With destructuring
const [firstColor, secondColor] = colors;
