function openMenu() {
    const navBar = document.getElementById("nav-bar");
    const currentWidth = navBar.clientWidth;
    const currentHeight = navBar.clientHeight;

    navBar.style.width = currentWidth + 100 + "px";
    navBar.style.height = currentHeight + 100 + "px";
}




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