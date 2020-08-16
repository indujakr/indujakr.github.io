let clear = document.getElementById("clear");
let input = document.querySelectorAll("input");
let redInput = document.getElementById("redInput");
let greenInput = document.getElementById("greenInput");
let blueInput = document.getElementById("blueInput");
let result2 = document.getElementById("result2");
let colorSet = document.getElementById("colorSet");
let hexVal = document.getElementById("hexVal");
let rgbInput = document.getElementById("rgbInput");

//Method to claer all input fields
const clearAll = () => {
    input.forEach(inputVal => inputVal.value = "");
    redInput.style.background = "white";
    greenInput.style.background = "white";
    blueInput.style.background = "white";
    colorSet.style.background = "white";
    colorSet.placeholder = "";
}

//Method for conversion from RGB to HEX value
const setHEXValue = () => {
    let red = redInput.value;
    let green = greenInput.value;
    let blue = blueInput.value;
    let bool = validateInput(red, green, blue);
    if (bool) {
        let redString = checkAlpha(red);
        let greenString = checkAlpha(green);
        let blueString = checkAlpha(blue);
        rgbInput.value = `rgb(${red},${green},${blue})`;
        hexVal.value = `#${redString}${greenString}${blueString}`;
        colorSet.style.background = "rgb(" + red + "," + green + "," + blue + ")";
        colorSet.placeholder = "";
        redInput.style.background = "white";
        greenInput.style.background = "white";
        blueInput.style.background = "white";
    } else {
        colorSet.placeholder = "Invalid Input!! Please Enter Valid Input ";
        redInput.style.background = "red";
        greenInput.style.background = "red";
        blueInput.style.background = "red";
        colorSet.style.background = "white";
    }

}

// Method to validate the user given input
const validateInput = (red, green, blue) => {
    if (red === "" || green === "" || blue === "") return false;
    if ((red >= 0 && red <= 255) && (green >= 0 && green <= 255) && (blue >= 0 && blue <= 255)) {
        return true;
    }
    return false;
}

// Method to generate HEX value and update if it as single digit
const checkAlpha = (code) => {
    code = (Number(code).toString(16)).toUpperCase();
    if (code.length === 1) return "0" + code;
    else return code;
}

clear.addEventListener("click", clearAll);
result2.addEventListener("click", setHEXValue);