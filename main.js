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
    rmValues(); // clear up input/output values upon changing active option
  }
  element.classList.add('highlighted');
  currentlyHighlighted = element;
  output.innerText = '';
}


// F to C conversion functions
function fahrenheitConversionText() {
    firstLine.innerText = "Enter F degrees below";
    secondLine.innerText = "and click 'Convert'";
    if (convert) {
        rmEvents();
    }
    convert.setAttribute("onclick", "fToC()");
    convert.addEventListener("click", fToC);
    return;
}

function fToC() {
    const inputValue = inputElement.value;
    if (isNaN(inputValue) || inputValue === ``) {
        inputNotValid();
    } else {
        fahrenheitConversionText();
        const celsius = ((inputValue - 32) * (5 / 9)).toFixed(1);
        output.innerText = celsius;
        return;
    }
}
  
// CM to Inch conversion functions
function cmConversionText() {
    firstLine.innerText = "Enter CMs to convert below";
    secondLine.innerText = "and click 'Convert'";
    if (convert) {
        rmEvents();
    }
    convert.setAttribute("onclick", "cmToInch()");
    convert.addEventListener("click", cmToInch);
    return;
}

function cmToInch() {
    const inputValue = inputElement.value;
    if (isNaN(inputValue) || inputValue === ``) {
        inputNotValid();
    } else {
        cmConversionText();
        const inches = (inputValue * 0.3937).toFixed(2);
        output.innerText = inches;
        return;
    }
}

// meter to foot conversion functions
function meterConversionText() {
    firstLine.innerText = "Enter meters to convert below";
    secondLine.innerText = "and click 'Convert'";
    if (convert) {
        rmEvents();
    }
    convert.setAttribute("onclick", "metersToFeet()");
    convert.addEventListener("click", metersToFeet);
    return;
}

function metersToFeet() {
    const inputValue = inputElement.value;
    if (isNaN(inputValue) || inputValue === ``) {
        inputNotValid();
    } else {
        meterConversionText();
        const feet = (inputValue * 3.28).toFixed(2);
        output.innerText = feet;
        return;
    }
}

// kilometer to mile conversion functions
function mileConversionText() {
    firstLine.innerText = "Enter kilometers to convert below";
    secondLine.innerText = "and click 'Convert'";
    if (convert) {
        rmEvents();
    }
    convert.setAttribute("onclick", "milesToKilometers()");
    convert.addEventListener("click", milesToKilometers);
    return;
}

function milesToKilometers() {
    const inputValue = inputElement.value;
    if (isNaN(inputValue) || inputValue === ``) {
        inputNotValid();
    } else {
        mileConversionText();
        const miles = (inputValue * 1.6).toFixed(2);
        output.innerText = miles;
        return;
    }
}

// I clear up event listeners and attributes
function rmEvents() {
    convert.removeEventListener("click", fToC);
    convert.removeEventListener("click", cmToInch);
    convert.removeEventListener("click", metersToFeet);
    convert.removeEventListener("click", milesToKilometers);
    convert.removeAttribute("onclick");
    return; 
}

// I display error message if input is not valid
function inputNotValid() {
    firstLine.innerText = `Please enter a valid number`;
    output.innerText = `X`;
}

// I clear up output and input values
function rmValues() {
    output.innerText = '';
    inputElement.value = '';
}