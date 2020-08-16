let clear = document.getElementById("clear");
let input = document.querySelectorAll("input");
let hexInput = document.getElementById("hexInput");
let result1 = document.getElementById("result1");
let redVal = document.getElementById("redVal");
let greenVal = document.getElementById("greenVal");
let blueVal = document.getElementById("blueVal");
let rgbVal = document.getElementById("rgbVal");
let colorSet = document.getElementById("colorSet");

//Method to claer all input fields
const clearAll = () => {
    input.forEach(inputVal => inputVal.value = "");
    hexInput.placeholder = "no need to input #";
    hexInput.style.background = "white";
    colorSet.style.background = "white";
    colorSet.placeholder = "";
}

//Method for conversion from HEX to RGB
const setRGBValue = () => {
    let inputHexVal = hexInput.value;
    let inputHex = inputHexVal.split("");
    let red = "";
    let green = "";
    let blue = "";
    let bool = validateInput(inputHexVal);
    if (bool) {
        inputHex.forEach((val, index) => {
            if (index === 0 || index === 1) red += val;
            if (index === 2 || index === 3) green += val;
            if (index === 4 || index === 5) blue += val;
        });
        let redNum = parseInt(red, 16);
        let greenNum = parseInt(green, 16);
        let blueNum = parseInt(blue, 16);
        redVal.value = redNum;
        greenVal.value = greenNum;
        blueVal.value = blueNum;
        rgbVal.value = `rgb(${redNum},${greenNum},${blueNum})`;
        colorSet.style.background = "rgb(" + redNum + "," + greenNum + "," + blueNum + ")";
        colorSet.placeholder = "";
        hexInput.style.background = "white";
    } else {
        colorSet.placeholder = "Invalid Input!! Please Input Valid HEX value";
        hexInput.style.background = "red";
        colorSet.style.background = "white";
    }
}

// Method to validate the user given input
const validateInput = (inputHex) => {
    if (inputHex.length !== 6) return false;
    for (let index = 0; index < inputHex.length; index++) {
        if (!(inputHex.charCodeAt(index) >= 48 && inputHex.charCodeAt(index) <= 57) &&
            !(inputHex.charCodeAt(index) >= 97 && inputHex.charCodeAt(index) <= 107) &&
            !(inputHex.charCodeAt(index) >= 65 && inputHex.charCodeAt(index) <= 70)) {
            return false;
        }
    }
    return true;
}

clear.addEventListener("click", clearAll);
result1.addEventListener("click", setRGBValue);