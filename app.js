// Accessing the form and its elements
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const ageInput = document.getElementById('age');
const submitBtn = document.getElementById('submitBtn');
const resultMessage = document.getElementById('resultMessage');

// Error message containers
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const ageError = document.getElementById('ageError');

// Elements for displaying submitted data
const submittedDataSection = document.getElementById('submittedData');
const submittedName = document.getElementById('submittedName');
const submittedEmail = document.getElementById('submittedEmail');
const submittedAge = document.getElementById('submittedAge');
const backToFormBtn = document.getElementById('backToFormBtn');

// Function to show error messages
function showError(input, message) {
    const errorElement = document.getElementById(`${input.id}Error`);
    errorElement.textContent = message;
}

// Function to clear error messages
function clearErrors() {
    nameError.textContent = '';
    emailError.textContent = '';
    ageError.textContent = '';
}

// Event listener to handle form submission
form.addEventListener('submit', function(event) {
    // Prevent form from submitting to the server
    event.preventDefault();

    // Clear previous errors
    clearErrors();

    let isValid = true;

    // Validate Name (should not be empty)
    if (nameInput.value.trim() === '') {
        showError(nameInput, 'Name is required');
        isValid = false;
    }

    // Validate Email (should be a valid email address)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(emailInput.value)) {
        showError(emailInput, 'Please enter a valid email address');
        isValid = false;
    }

    // Validate Age (should be a number greater than or equal to 18)
    const ageValue = parseInt(ageInput.value, 10);
    if (isNaN(ageValue) || ageValue < 18) {
        showError(ageInput, 'Age must be a number and at least 18');
        isValid = false;
    }

    // If form is valid, show success message and the submitted data
    if (isValid) {
        resultMessage.textContent = 'Form submitted successfully!';
        resultMessage.classList.remove('error');
        resultMessage.classList.add('success');
        
        // Hide the form and show submitted data
        form.classList.add('hidden');
        submittedDataSection.classList.remove('hidden');

        // Populate the submitted data
        submittedName.textContent = nameInput.value;
        submittedEmail.textContent = emailInput.value;
        submittedAge.textContent = ageInput.value;
    } else {
        resultMessage.textContent = '';
    }
});

// Adding interactivity: Focus and Blur events
nameInput.addEventListener('focus', () => {
    nameInput.style.backgroundColor = '#f0f8ff'; // Change background on focus
});

nameInput.addEventListener('blur', () => {
    nameInput.style.backgroundColor = ''; // Reset background when focus is lost
});

// Hover event for submit button
submitBtn.addEventListener('mouseover', () => {
    submitBtn.style.backgroundColor = '#4CAF50'; // Change button color on hover
});

submitBtn.addEventListener('mouseout', () => {
    submitBtn.style.backgroundColor = ''; // Reset color on mouse out
});

// Event listener for "Back to Form" button
backToFormBtn.addEventListener('click', function() {
    // Reset the form and switch back to the original form view
    form.classList.remove('hidden');
    submittedDataSection.classList.add('hidden');
    resultMessage.textContent = ''; // Clear any previous result messages
    form.reset(); // Optionally reset the form fields
});
