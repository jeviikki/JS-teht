import { restaurantModal, restaurantRow } from "./components.js";
import {baseUrl} from "./variables.js";
import {fetchData} from "./utils.js";

"use strict";

async function getRestaurants(){
	const target = document.querySelector("table");

	const restaurants = await fetchData(baseUrl);
	
	//sorts restaurants
	restaurants.sort((a,b) => a.name > b.name);

	for (const restaurant of restaurants) {
		const row = restaurantRow(restaurant);
		target.append(row);

		row.addEventListener("click", async function(evt){
			// highlight
			const menu = await fetchData(`${baseUrl}/daily/${restaurant._id}/en`);
			for (const row of allRows) {
				row.classList.remove("highlight");
			}
			row.classList = "highlight";

			const dialog = document.querySelector("dialog");
			dialog.innerHTML = restaurantModal(restaurant, menu)
			dialog.setAttribute("open", "")
		});
	}
	const allRows = document.querySelectorAll("tr");
}

getRestaurants();