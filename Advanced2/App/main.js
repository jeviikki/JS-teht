import { restaurantModal, restaurantRow } from "./components.js";
import {baseUrl, target, dialog} from "./variables.js";
import {fetchData} from "./utils.js";

"use strict";

async function getRestaurants(){
	const restaurants = await fetchData(baseUrl);
	const filteredRestaurants = filterRestaurants(restaurants);
	await renderRestaurants(filteredRestaurants);
}

const filterRestaurants = (restaurants) => {
	const formData = new FormData(form);
	let data = restaurants;
	let filter1 = "";
	let filter2 = "";

	const filters = document.querySelectorAll("input[type='checkbox']:checked")

	if (filters.length == 1) {
		filter1 = filters[0].value || "";
	}
	if (filters.length == 2) {
		filter2 = filters[1].value || "";
	}

	const filtered = restaurants.filter(restaurant => 
		restaurant.company.toLowerCase() == filter1 || filter2
	);

	deleteRows();
	data = filtered;
	return data;
};

const deleteRows = () => {
	const deletion = document.querySelectorAll("tr:not(.tableheader)")
	deletion.forEach((element) => {
		element.remove();
	});
}

async function renderRestaurants(restaurants){

	restaurants.sort((a,b) => a.name > b.name);

	//render
	restaurants.forEach((restaurant) => {
		const row = restaurantRow(restaurant);
		target.append(row);

		row.addEventListener("click", async function(evt){
			// highlight
			const menu = await fetchData(`${baseUrl}/daily/${restaurant._id}/en`);
			document.querySelectorAll("tr").forEach((row) => {
				row.classList.remove("highlight");
			});
			row.classList = "highlight";

			dialog.innerHTML = restaurantModal(restaurant, menu)
			dialog.setAttribute("open", "")
		});
	});
};

const form = document.querySelector("#filter-form");
form.addEventListener("submit", async(event) => {
	event.preventDefault();
	await getRestaurants();
});
await getRestaurants();
