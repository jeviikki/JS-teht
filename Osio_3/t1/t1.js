// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
list = document.getElementsByTagName("ul")[0];

for (const item of todoList) {

	if (item.completed == true) {
		completion = "checked";
	} else {
		completion = "";
	}

	list.insertAdjacentHTML("beforeend", `<li>
		<input type="checkbox" id="todo${item.id}" ${completion}>
		<label for="todo${item.id}">${item.task}</label>
	</li>`);
}
