const restaurantRow = (restaurant) => {
    const {name, address = "Unknown"} = restaurant;
	const tr = document.createElement("tr");
    tr.innerHTML = `<td>${name}</td><td>${address}</td>`;
    return tr;
}

const restaurantModal = (restaurant, menu) => {
	const {name, address, postalCode, city, phone, company} = restaurant;
	console.log(menu)

	let menuHtml

	if (menu.length < 1) {
		menuHtml = `Empty.`;
	} else {
		menuHtml = "<ul>";
		for (const course of menu) {
			let {name, price, diets} = course;
			price = price || "? €";
			diets = diets || " ";
			menuHtml += `<li><b>${name}</b> ${diets} | ${price}</li>`;
		}
		menuHtml += "</ul>"
	}

	const dialogHtml = `<h2>Restaurant info</h2>
		<span id="place-name"><b>Restaurant name:</b> ${name}</span>
		<span id="place-address"><br><b>Address:</b> ${address}, ${postalCode} ${city}</span>
		<span id="place-phone"><br><b>Phone number:</b> ${phone}</span>
		<span id="place-company"><br><b>Company:</b> ${company}</p></span>
		<h2>Today's menu</h2>
		${menuHtml}`

	return dialogHtml;
}

export{
	restaurantModal,
	restaurantRow
}; 