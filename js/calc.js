let n1, n2, operator, result;
let prev = true;
const btnSum = document.getElementById("btnSum");
const btnRes = document.getElementById("btnSust");
const btnMul = document.getElementById("btnMul");
const btnDiv = document.getElementById("btnDiv");
const totalBtn = document.getElementById("btnResult");

totalBtn.addEventListener("click", (e) => {
	resultado(operator);
});

function suma(val1, val2) {
	result = val1 + val2;
	screenPad.textContent = result;
}

function resta(val1, val2) {
	result = val1 - val2;
	screenPad.textContent = result;
}

function multi(val1, val2) {
	result = val1 * val2;
	screenPad.textContent = result;
}

function div(val1, val2) {
	result = val1 / val2;
	screenPad.textContent = result;
}

function resultado(operator) {
	n2 = parseFloat(screenPad.textContent);
	prev = true;

	switch (operator) {
		case "+":
			suma(n1, n2);
			break;
		case "-":
			resta(n1, n2);
			break;
		case "*":
			multi(n1, n2);
			break;
		case "/":
			div(n1, n2);
			break;
	}
}

btnSum.addEventListener("click", (e) => {
	n1 = parseFloat(screenPad.textContent);
	if (prev) {
		prev = false;
		operator = "+";
		screenPad.textContent = "";
	}
});

btnRes.addEventListener("click", (e) => {
	n1 = parseFloat(screenPad.textContent);
	if (prev == true) {
		prev = false;
		operator = "-";
		screenPad.textContent = "";
	}
});

btnMul.addEventListener("click", (e) => {
	n1 = parseFloat(screenPad.textContent);
	if (prev) {
		prev = false;
		operator = "*";
		screenPad.textContent = "";
	}
});

btnDiv.addEventListener("click", (e) => {
	n1 = parseFloat(screenPad.textContent);
	if (prev) {
		prev = false;
		operator = "/";
		screenPad.textContent = "";
	}
});
