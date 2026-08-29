"use strict";

async function getRestaurants() {
	const target = document.getElementsByTagName("table")[0];
	try {
		// gets restaurants
		const response = await fetch("https://media1.edu.metropolia.fi/restaurant/api/v1/restaurants");
		if (!response.ok) throw new Error("invalid");
		const restaurants = await response.json();

		//sorts restaurants
		restaurants.sort((a,b) => a.name > b.name);


		for (const place of restaurants) {
			// adds restaurants
			const tr = document.createElement("tr");
			tr.innerHTML = `<td>${place.name}</td><td>${place.address}</td>`;
			tr.addEventListener("click", function(evt){

				// highlight
				for (const row of allRows) {
					row.classList.remove("highlight");
				}

				// dialog
				const dialog = document.querySelector("dialog");
				dialog.setAttribute("open", "");
				dialog.innerHTML = 
					`<button id="close-btn">X</button>
					<h2>Restaurant info</h2>
					<b>Restaurant name:</b> ${place.name}
					<br><b>Address:</b> ${place.address}, ${place.city} ${place.postalCode}
					<br><b>Phone number:</b> ${place.phone}
					<br><b>Company:</b> ${place.company}</p>
					<h2>Today's menu</h2>
					<ul id="restaurant-menu"></ul>`
				tr.classList = "highlight";

				//close button
				dialog.querySelector("#close-btn").addEventListener("click", function(evt){
					dialog.close();
					tr.classList.remove("highlight");
					dialog.removeAttribute("open");
				});

				//menu
				getMenu(`https://media1.edu.metropolia.fi/restaurant/api/v1/restaurants/daily/${place._id}/en`);
			});
			target.append(tr);
		}

		const allRows = document.getElementsByTagName("tr");

	} catch (error) {
		const p = document.createElement("p");
		p.innerText = `Error loading restaurants`;
		target.append(p);
		console.log(error.message);
	}
}

async function getMenu(url) {
	const target = document.querySelector("#restaurant-menu");

	try {
		const response = await fetch (url);
		if (!response.ok) throw new Error("invalid");
		const json = await response.json();
		const menu = json.courses;

		for (const course of menu) {
			const li = document.createElement("li");
			li.innerHTML = `<b>${course.name}</b>`
			target.append(li);
		}

		if (menu.length == 0) {
			target.append("Empty.");
		}

	} catch (err) {
		console.log(err.message);
		target.append("Error loading menu.");
	}

}

getRestaurants();