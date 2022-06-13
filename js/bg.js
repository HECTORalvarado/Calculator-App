const swt = document.getElementById("swt");
const body = document.getElementById("body");
swt.addEventListener("change", (e) => {
	switch (swt.value) {
		case "1":
			body.classList.add("theme1");
			body.classList.remove("theme2");
			body.classList.remove("theme3");
			break;
		case "2":
			body.classList.add("theme2");
			body.classList.remove("theme1");
			body.classList.remove("theme3");
			break;
		case "3":
			body.classList.add("theme3");
			body.classList.remove("theme1");
			body.classList.remove("theme2");
			break;
		default:
			break;
	}
});
