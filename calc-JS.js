function calculate() {
    var x = document.getElementById("output").value;
    var y = eval(x);
    document.getElementById("output").value = y;
}
function display(value) {
    document.getElementById("output").value += value;
}
function remove(value) {
    var bsp = document.getElementById("output").value;
    document.getElementById("output").value = bsp.substring(0, bsp.length - 1);
}
function clearScreen() {
    document.getElementById("output").value = "";
}

function restrictCharacters(event) {
    const allowedCharacters = /[0-9]/; // not Allowed characters regular expression
    const key = event.key; // Get the key that was pressed
    const allowedKeys = ['Backspace', 'Enter', '+', '-', '/', '*'];
    // Check if the key is allowed
    if (!allowedCharacters.test(key) && !allowedKeys.includes(key)) {
      // If the key is not allowed, prevent its entry into the input field
      event.preventDefault();
    }
  }

  function showOutput(event){
    if (event.key === 'Enter') {
        const input = document.getElementById("output").value += value;
        const output = function calculate(){;
    
        // Do any processing on the input value here
        // For example, if you want to double the input value:
        // const processedInput = input * 2;
    
        output.textContent = processedInput;
      }}
  }
