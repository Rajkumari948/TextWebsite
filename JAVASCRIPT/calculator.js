
const display = document.getElementById('result');


const appendToDisplay = (value) => {
    if (display.value === "Error") {
        display.value = "";
    }
    display.value += value;
};


const clearScreen = () => {
    display.value = "";
};


const deleteLast = () => {
    display.value = display.value.slice(0, -1);
};


const calculate = () => {
    try {
        if (display.value !== "") {
            display.value = eval(display.value);
        }
    } catch (error) {
        display.value = "Error";
    }
};