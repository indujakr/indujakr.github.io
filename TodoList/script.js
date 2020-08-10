var button = document.querySelectorAll("button");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");

function inputLength() {
	/* Method to calculate input length */
	return input.value.length;
}

function createListElement() {
	/* Method to create new item in the todo list with delete button */
	var newLi = document.createElement("li");
	newLi.appendChild(document.createTextNode(input.value+" "));
	input.value = "";

	var delButton = document.createElement("button");
	delButton.appendChild(document.createTextNode("Delete"));
	delButton.setAttribute("class","delete");
	newLi.appendChild(delButton);
 	ul.appendChild(newLi);
	var br = document.createElement("br");
	ul.appendChild(br);
	delButton.onclick = decideAction;
}

function addListAfterClick() {
	/* Method to create new item in the TODO list with Enter button */
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
		/* Method to create new item in the TODO list with Enter key */
	if (event.keyCode === 13) {
			addListAfterClick();
	}
}

function toggleOnClick(e) {
		/* Method to update done status */
	if (e.target.tagName === "LI") {
        e.target.classList.toggle("done");
    }
}

function decideAction(e){
		/* Method to decide delete an item or add an item to TODO list */
	if(e.target.className === "delete"){
		ul.removeChild(e.target.parentElement);
	}else{
	   addListAfterClick();
	}

}

button.forEach(buttons => {
	buttons.addEventListener("click",decideAction);	
});

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click",toggleOnClick);