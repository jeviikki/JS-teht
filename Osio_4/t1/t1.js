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
function addItem(item) {
	const ul = document.getElementsByTagName("ul")[0];
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

	const delBtn = document.createElement("button");
	delBtn.setAttribute("class", "delete-btn")
	delBtn.innerText = "X";

	delBtn.addEventListener("click", function(evt){
		todoList.splice(todoList.indexOf(item), 1);
		console.log(todoList);
		ul.removeChild(li)
	})

	li.append(input, label, delBtn);

	ul.appendChild(li);
}

for (const item of todoList) {
	addItem(item);
}

// open modal window

const addBtn = document.querySelector(".add-btn");
const dialog = document.querySelector("dialog");
addBtn.addEventListener("click", function(evt){
	dialog.setAttribute("open","");
})

// modal window events
const form = document.querySelector("form");
const input = document.querySelector("form input");
const submitBtn = document.querySelector("form button");
let itemId = 6;

form.addEventListener("submit", function(evt){
	evt.preventDefault();
	if (input.value != "") {
		item = {id: itemId,
			task: input.value,
			completed: false}
		addItem(item);
		todoList.push(item);
		console.log(todoList);
		itemId += 1;
	}
	dialog.removeAttribute("open");
})
