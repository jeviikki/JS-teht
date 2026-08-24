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
ul = document.getElementsByTagName("ul")[0];

for (const item of todoList) {

	const li = document.createElement("li");

	const input = document.createElement("input");
	input.setAttribute("type", "checkbox");
	input.setAttribute("id", `todo-${item.id}`);

	if (item.completed == true) {
		input.setAttribute("checked", "");
	}

	const label = document.createElement("label");
	label.htmlFor = `todo-${item.id}`;
	label.innerText = item.task;

	li.append(input, label);

	ul.appendChild(li);
}
