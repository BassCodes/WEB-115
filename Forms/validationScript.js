// Alexander Bass
// 3/1/24
// L8 Form Assignment

// JavaScript code for form validation

window.addEventListener("load", () => {
  let form = document.getElementById("myForm");
  let InputBox = document.getElementById("inputField");
  // Regular expression pattern for alphanumeric input
  let formValidityRegex = /^[a-zA-Z0-9]*$/;
  let invalidInputInstruction =
    "Input must be a letter a-z, A-Z, or a number 0-9";

  // Input event so as soon as you input an invalid character it changes the color
  // Check css file for added invalid selector
  InputBox.addEventListener("input", () => {
    validateFormInput(InputBox, formValidityRegex, invalidInputInstruction);
  });

  form.addEventListener("submit", (e) => {
    validateFormInput(InputBox, formValidityRegex, invalidInputInstruction);
    if (!form.checkValidity()) {
      // Prevent form from submitting
      e.preventDefault();
    } else {
      // Valid input: display confirmation and submit the form
      alert("Form submitted sucessfully!");
    }
  });
});

function validateFormInput(input, regex, instruction) {
  // The form validation could have been done completely on the input field with a `pattern=`,
  // but that would have removed the need for this lab.

  // Retrieve the input field value & Check if the input value matches the pattern
  let isInputValid = regex.test(input.value);
  if (isInputValid) {
    // clear error
    input.setCustomValidity("");
  } else {
    // Invalid input: display error message
    // set error
    input.setCustomValidity(instruction);
  }
}
