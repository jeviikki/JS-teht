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

// adds list items to the document
const ul = document.getElementsByTagName("ul")[0];

for (const item of todoList) {

	const li = document.createElement("li");

	const input = document.createElement("input");
	input.setAttribute("class", "checkbox");
	input.setAttribute("type", "checkbox");
	input.setAttribute("id", item.id);

	input.addEventListener("click", function(evt){
		if (input.checked == true) {
			item.completed = true;
		} else {
			item.completed = false;
		}
		console.log(todoList); // verification
	})

	if (item.completed == true) {
		input.setAttribute("checked", "");
	}

	const label = document.createElement("label");
	label.htmlFor = item.id;
	label.innerText = item.task;

	const btn = document.createElement("button");
	btn.setAttribute("class", "delete-btn")
	btn.innerText = "X";

	btn.addEventListener("click", function(evt){
		todoList.splice(todoList.indexOf(item), 1);
		console.log(todoList);
		ul.removeChild(li)
	})

	li.append(input, label, btn);

	ul.appendChild(li);
}
