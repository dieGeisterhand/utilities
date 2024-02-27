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
        convert.removeAttribute("onclick");
    }
    convert.setAttribute("onclick", "cmToInch()");
    convert.addEventListener("click", cmToInch);
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


function meterConversionText() {}
function kilometerconversionText() {}


/* 
REFERENCE



const fahrenheitInput = document.getElementById("fahrenheit");
const celsius = document.getElementById("celsius");
// f to c formula is (°C) = (Temperature in degrees Fahrenheit (°F) - 32) * 5/9

function celsiusConversion() {
    const fahrenheit = parseFloat(fahrenheitInput.value);
    
    if (fahrenheit === ``) {
        celsius.innerText = `Please enter a number.`;
        return;
    } else if (!isNaN(fahrenheit)) {
        const celsiusCalc = ((fahrenheit - 32) * (5/9)).toFixed(1);
        celsius.innerText = `${celsiusCalc} C`;
        return;
    } else {
        celsius.innerText = `Please enter a number.`;
        return;
    }

}
*/