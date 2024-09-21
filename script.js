document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("todo-form");
    const taskInput = document.getElementById("new-task");
    const todoList = document.getElementById("todo-list");
  
    // Handle form submission to add tasks
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const taskText = taskInput.value.trim();
  
      if (taskText !== "") {
        addTask(taskText);
        taskInput.value = ""; // Clear input field
      }
    });
  
    // Function to add a task
    function addTask(task) {
      const li = document.createElement("li");
  
      // Task text
      const taskText = document.createElement("span");
      taskText.textContent = task;
      li.appendChild(taskText);
  
      // Delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.classList.add("delete-btn");
      deleteBtn.addEventListener("click", () => li.remove());
      li.appendChild(deleteBtn);
  
      todoList.appendChild(li);
    }
  });
  