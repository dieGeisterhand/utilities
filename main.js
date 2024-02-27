const firstLine = document.getElementById("descLineOne");
const secondLine = document.getElementById("descLineTwo");
const fahrenheit = document.getElementById("fahrenheit");


let currentlyHighlighted = null;

function highlight(element) {
  // Remove highlight from the currently highlighted item
  if (currentlyHighlighted) {
    currentlyHighlighted.classList.remove('highlighted');
  }

  // Add highlight to the clicked item
  element.classList.add('highlighted');

  // Update the currently highlighted reference
  currentlyHighlighted = element;
}



function descriptionTextF() {
    firstLine.innerText = "Enter F degrees below";
    secondLine.innerText = "and click 'Convert'";
    return;
}



// f to c formula is (°C) = (Temperature in degrees Fahrenheit (°F) - 32) * 5/9


function cmConversionText() {}
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