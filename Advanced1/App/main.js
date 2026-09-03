import { restaurantModal, restaurantRow } from "./components.js";

"use strict";

async function getRestaurants() {
	const target = document.querySelector("table");
	try {
		// gets restaurants
		const response = await fetch("https://media1.edu.metropolia.fi/restaurant/api/v1/restaurants");
		if (!response.ok) throw new Error("invalid");
		const restaurants = await response.json();

		//sorts restaurants
		restaurants.sort((a,b) => a.name > b.name);

		for (const restaurant of restaurants) {

			// adds restaurants
			const row = restaurantRow(restaurant);
			row.addEventListener("click", function(evt){

				// highlight
				for (const row of allRows) {
					row.classList.remove("highlight");
				}

				row.classList = "highlight";

				getMenu(restaurant, `https://media1.edu.metropolia.fi/restaurant/api/v1/restaurants/daily/${restaurant._id}/en`);

			});
			target.append(row);
		}

		const allRows = document.getElementsByTagName("tr");

	} catch (error) {
		const p = document.createElement("p");
		p.innerText = `Error loading restaurants`;
		target.append(p);
		console.log(error.message);
	}
}

async function getMenu(restaurant, url) {
	try {
		const response = await fetch (url);
		if (!response.ok) throw new Error("invalid");
		const json = await response.json();
		const menu = json.courses;
		
		// dialog
		const dialog = document.querySelector("dialog");
		dialog.innerHTML = restaurantModal(restaurant, menu)
		dialog.setAttribute("open", "")
		
	} catch (err) {
		console.log(err.message);
	}
}

getRestaurants();