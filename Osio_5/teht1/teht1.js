"use strict";

async function test() {
	try {
		const options = {
			headers: {
				"x-api-key" : "reqres-free-v1",
			}
		};
		const response = await fetch("https://reqres.in/api/users/1", options);
		console.log(response);
	} catch (error) {
		console.log(error.message);
	}
}

test();