const restaurantRow = (restaurant) => {
    const {name, address = "Unknown", company} = restaurant;
	const tr = document.createElement("tr");
    tr.innerHTML = `<td>${name}</td><td>${address}</td><td>${company}</td>`;
    return tr;
}

const restaurantModal = (restaurant, menu) => {
	const {name, address, postalCode, city, phone, company} = restaurant;
	const courses = menu.courses;
	let menuHtml

	if (courses.length < 1) {
		menuHtml = `Empty.`;
	} else {
		menuHtml = "<ul>";
		for (const course of courses) {
			let {name, price, diets} = course;
			price = price || "? €";
			console.log(course);
			menuHtml += `<li><b>${name}</b> ${diets.map((diet) => {
				switch (diet) {
					//sydänmerkitty
					case "*":
						return "&#x2764";
					//ilmastoystävällinen
					case "ILM":
						return "&#x267B";
					//gluteeniton
					case "G":
						return "&#x1F33E";
					//laktoositon, vähälaktoosinen, maidoton
					case "L": case "VL": case "M":
						return "&#x1F42E";
					//vegaani
					case "Veg":
						return "&#x1F331";
					// sisältää allergeeneja
					case "A":
						return "&#x1F927";
					default:
						return diet;
				}})}, ${price}</li>`;
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