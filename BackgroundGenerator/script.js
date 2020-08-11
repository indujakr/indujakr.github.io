let css = document.querySelector("h3");
let body = document.getElementById("gradient");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let random = document.getElementById("random");

css.textContent = body.style.background +";";

function createRandomBackgroundColor(){
		var letters = '0123456789ABCDEF';
		var first = '#';
		var second = '#';
		for (var i = 0; i < 6; i++) {
			first += letters[Math.floor(Math.random() * 16)];
		}
		for (var i = 0; i < 6; i++) {
			second += letters[Math.floor(Math.random() * 16)];
		}
   setGradient(first,second);
}

function createBackgroundWithPallet(){
	setGradient(color1.value,color2.value);
}

function setGradient(first,second){
	body.style.background = "linear-gradient(to right, " 
							+ first + ", "
							+ second + " )";
	css.textContent = body.style.background +";";
}



color1.addEventListener("input", createBackgroundWithPallet);

color2.addEventListener("input", createBackgroundWithPallet);

random.addEventListener("click", createRandomBackgroundColor);

createBackgroundWithPallet();