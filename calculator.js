const calculator = {
    // Initialize variables to store user input and result
    input: '',
    result: 0,
  
    // Function to handle user input
    handleInput: function(event) {
      // Add the clicked button's value to the input string
      this.input += event.target.value;
      // Update the displayed input
      this.updateInput();
    },
  
    // Function to calculate and display the result
    calculate: function() {
      // Try to evaluate the input as an arithmetic expression
      try {
        // If successful, store the result and update the display
        this.input = this.input.replace(/=+$/, '');
        console.log(this.input)
        this.result = eval(this.input);
        this.updateResult();
      } catch (error) {
        // If an error occurs (e.g. division by zero), display an error message
        this.input = 'Error';
        this.updateInput();
      }
    },
  
    // Function to clear the input and result
    clear: function() {
      this.input = '';
      this.result = 0;
      this.updateInput();
      this.updateResult();
    },
  
    // Function to update the displayed input
    updateInput: function() {
      document.getElementById('input').innerHTML = this.input;
    },
  
    // Function to update the displayed result
    updateResult: function() {
      document.getElementById('result').innerHTML = this.result;
    },
  };
  
  // Add event listeners to the calculator buttons
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      calculator.handleInput(event);
    });
  });
  
  // Add event listeners to the equals and clear buttons
  document.getElementById('equals').addEventListener('click', () => {
    calculator.calculate();
  });
  document.getElementById('clear').addEventListener('click', () => {
    calculator.clear();
  });
  