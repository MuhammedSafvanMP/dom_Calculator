// take input value 
const display = document.getElementById('display');


// to store button value and displaying input 
function appendToDisplay (input) {
    display.value += input
}

// clear all input values
function clearAll () {
    display.value = "";
}

// calculating all values using eval method and all so the modules checking
function calculate () {
    try {
        let expression = display.value.replace(/%/g, '/100');
        display.value = eval(expression);     
    } catch (error) {
        display.value = "Error";
    }
}

// clear only one value in input 
function clearOne () {
  let remove =  display.value;
    display.value = remove.slice(0,-1);
}