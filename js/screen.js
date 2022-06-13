let screenPad = document.getElementById('screenPad');
let firtsTime = true;
let point = false;

const btnDot = document.getElementById('btnDot');
const btnDel = document.getElementById('btnDel');
const btnReset = document.getElementById('btnRes');

const btn = [document.getElementById('btn0'),document.getElementById('btn1'),document.getElementById('btn2'),document.getElementById('btn3'),document.getElementById('btn4'),document.getElementById('btn5'),document.getElementById('btn6'),document.getElementById('btn7'),document.getElementById('btn8'),document.getElementById('btn9')];

for (let i = 0; i < btn.length; i++) {
	btn[i].addEventListener('click', (e)=>{
		addNumber(i);
	});
}

btnDot.addEventListener('click', (e)=>{
	if (!point) {	
		screenPad.textContent += ".";
		firtsTime=false;
		point = true;
	}
});

btnDel.addEventListener('click', (e)=>{
	deleteNumber();
});

btnReset.addEventListener('click', (e)=>{
	screenPad.textContent = 0;
	firtsTime = true;
	point = false;
});

function addNumber(number) {
	if (firtsTime == true) {
		screenPad.textContent = number;
		firtsTime = false;
	} else if (number == 0 && screenPad.textContent == 0){
		screenPad.textContent = number;
		firtsTime = true;
	}
	else {
		screenPad.textContent += number;
	}
}

function deleteNumber() {
	let newString = screenPad.textContent.slice(0, -1, screenPad.length);
	screenPad.textContent = newString;
	if (!screenPad.textContent.includes('.')) {
		point = false;
	}
}