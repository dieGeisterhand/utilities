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

function descriptionTextF() {
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
    checkNumber = parseFloat(inputValue);
    if (isNaN(checkNumber)) {
        firstLine.innerText = `Please enter a valid number`;
        output.innerText = `x`;
    } else {
        descriptionTextF();
        const celsius = ((inputValue - 32) * (5 / 9)).toFixed(1);
        output.innerText = celsius;
        return;
    }
}
  

// f to c formula is (°C) = (Temperature in degrees Fahrenheit (°F) - 32) * 5/9

function iConversionText() {}
function mConversionText() {}
function kconversionText() {}


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