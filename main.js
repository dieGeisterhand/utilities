const firstLine = document.getElementById("descLineOne");
const secondLine = document.getElementById("descLineTwo");
const fahrenheit = document.getElementById("fahrenheit");


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