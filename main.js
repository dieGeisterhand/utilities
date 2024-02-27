const firstLine = document.getElementById("descLineOne");
const secondLine = document.getElementById("descLineTwo");

const convert = document.getElementById("convert");

const output = document.getElementById("output");
const inputElement = document.getElementById("input");

// adds the highlighted class to the clicked menu element
let currentlyHighlighted = null;

function highlight(element) {
  if (currentlyHighlighted) {
    currentlyHighlighted.classList.remove('highlighted');
  }
  element.classList.add('highlighted');
  currentlyHighlighted = element;
}

// F to C conversion functions
function fahrenheitConversionText() {
    firstLine.innerText = "Enter F degrees below (number)";
    secondLine.innerText = "and click 'Convert'";
    if (convert) {
        convert.removeEventListener("click", cmToInch);
        convert.removeEventListener("click", metersToFeet);
        convert.removeEventListener("click", kilometersToMiles);
        convert.removeAttribute("onclick");
    }
    convert.setAttribute("onclick", "fToC()");
    convert.addEventListener("click", fToC);
    return;
}

function fToC() {
    const inputValue = inputElement.value;
    const checkNumber = parseFloat(inputValue);
    if (isNaN(checkNumber)) {
        firstLine.innerText = `Please enter a valid number`;
        output.innerText = `x`;
    } else {
        fahrenheitConversionText();
        const celsius = ((inputValue - 32) * (5 / 9)).toFixed(1);
        output.innerText = celsius;
        return;
    }
}
  
// CM to Inch conversion functions
function cmConversionText() {
    firstLine.innerText = "Enter CMs to convert below (number)";
    secondLine.innerText = "and click 'Convert'";
    if (convert) {
        convert.removeEventListener("click", fToC);
        convert.removeEventListener("click", metersToFeet);
        convert.removeEventListener("click", kilometersToMiles);
        convert.removeAttribute("onclick");
    }
    convert.setAttribute("onclick", "cmToInch()");
    convert.addEventListener("click", cmToInch);
    return;
}

function cmToInch() {
    const inputValue = inputElement.value;
    const checkNumber = parseFloat(inputValue);
    if (isNaN(checkNumber)) {
        firstLine.innerText = `Please enter a valid number`;
        output.innerText = `x`;
    } else {
        cmConversionText();
        const inches = (inputValue * 0.3937).toFixed(2);
        output.innerText = inches;
        return;
    }
}

// meter to foot conversion functions
function meterConversionText() {
    firstLine.innerText = "Enter meters to convert below (number)";
    secondLine.innerText = "and click 'Convert'";
    if (convert) {
        convert.removeEventListener("click", fToC);
        convert.removeEventListener("click", cmToInch);
        convert.removeEventListener("click", kilometersToMiles);
        convert.removeAttribute("onclick");
    }
    convert.setAttribute("onclick", "metersToFeet()");
    convert.addEventListener("click", metersToFeet);
    return;
}

function metersToFeet() {
    const inputValue = inputElement.value;
    const checkNumber = parseFloat(inputValue);
    if (isNaN(checkNumber)) {
        firstLine.innerText = `Please enter a valid number`;
        output.innerText = `x`;
    } else {
        meterConversionText();
        const feet = (inputValue * 3.28).toFixed(2);
        output.innerText = feet;
        return;
    }
}

// kilometer to mile conversion functions
function kilometerConversionText() {
    firstLine.innerText = "Enter kilometers to convert below (number)";
    secondLine.innerText = "and click 'Convert'";
    if (convert) {
        convert.removeEventListener("click", fToC);
        convert.removeEventListener("click", cmToInch);
        convert.removeEventListener("click", metersToFeet);
        convert.removeAttribute("onclick");
    }
    convert.setAttribute("onclick", "kilometersToMiles()");
    convert.addEventListener("click", kilometersToMiles);
    return;
}

function kilometersToMiles() {
    const inputValue = inputElement.value;
    const checkNumber = parseFloat(inputValue);
    if (isNaN(checkNumber)) {
        firstLine.innerText = `Please enter a valid number`;
        output.innerText = `x`;
    } else {
        kilometerConversionText();
        const miles = (inputValue * 0.621371).toFixed(2);
        return;
    }
}