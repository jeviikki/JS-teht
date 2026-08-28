"use strict";

const data = {
	body: JSON.stringify({
		first_name: "John",
		last_name: "Smith",
		job: "plumber",
	}),
	method: "POST",
	headers: {
		"Content-type" : "application/json",
	},
};

async function teht2() {
	try {
		const response = await fetch("https://reqres.in/api/users", data);
		if (!response.ok) throw new Error('Invalid input!');
		const json = await response.json();
		console.log(json); 
	} catch (error) {
		console.log(error.message);
	}
}

teht2();