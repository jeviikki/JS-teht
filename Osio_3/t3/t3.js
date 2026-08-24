target = document.getElementById("target");
const userInfo = [];

userInfo.push(navigator.userAgent); /* browser and os */
userInfo.push(`${window.screen.width}, ${window.screen.height}`);
userInfo.push(`${window.innerWidth}, ${window.innerHeight}`);
const date = new Date();
userInfo.push(date.toLocaleDateString(
	"fi-FI",
	{
		year: "numeric",
		month : "long",
		day : "numeric",
	}
),
date.toLocaleTimeString(
	"fi-FI",
	{
		hour : "2-digit",
		minute : "2-digit",
	}
)
);

console.log(userInfo);

for (data of userInfo) {
	const p = document.createElement("p");
	p.innerText = data;
	target.appendChild(p);
}
