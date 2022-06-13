const swt = document.getElementById("swt");
const body = document.getElementById("body");

swt.addEventListener("change", (e) => {
	switch (swt.value) {
		case "1":
			body.classList.add("theme1");
			body.classList.remove("theme2");
			body.classList.remove("theme3");
			localStorage.setItem('theme1', true);
			localStorage.setItem('theme2', false);
			localStorage.setItem('theme3', false);
			break;
		case "2":
			body.classList.add("theme2");
			body.classList.remove("theme1");
			body.classList.remove("theme3");
			localStorage.setItem('theme2', true);
			localStorage.setItem('theme1', false);
			localStorage.setItem('theme3', false);
			break;
		case "3":
			body.classList.add("theme3");
			body.classList.remove("theme1");
			body.classList.remove("theme2");
			localStorage.setItem('theme3', true);
			localStorage.setItem('theme2', false);
			localStorage.setItem('theme1', false);
			break;
		default:
			break;
	}
});

if (localStorage.getItem('theme2') === 'true') {
	document.body.classList.add('theme2');
	document.body.classList.remove('theme1');
	document.body.classList.remove('theme3');
}else if( localStorage.getItem('theme3') === 'true') {
	document.body.classList.add('theme3');
	document.body.classList.remove('theme1');
    document.body.classList.remove('theme2');
} else {
	document.body.classList.add('theme1');
	document.body.classList.remove('theme2');
    document.body.classList.remove('theme3');
}
