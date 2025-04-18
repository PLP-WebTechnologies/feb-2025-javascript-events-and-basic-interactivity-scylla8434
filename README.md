# feb-2025-avasjcript-events-and-basic-interactivity
This project demonstrates how to handle form validation, manage interactive elements, and use event listeners effectively with JavaScript. The form allows users to submit data, view a summary of their submission, and return to the form to make any necessary edits.

## Features
### 1. **Form Validation**
   - **Name**: The name field is required (cannot be empty).
   - **Email**: The email field must contain a valid email address.
   - **Age**: The age field must be a number, and the user must be at least 18 years old.

### 2. **Event Listeners**
   - **Form Submission**: The form submission is intercepted to perform validation. If the form is valid, it displays the submitted data and hides the form.
   - **Focus and Blur Events**: These events are added to the name input field to provide visual feedback by changing the background color when the input field is focused or loses focus.
   - **Hover Events**: The submit button changes its color when hovered over, providing additional visual feedback to the user.

### 3. **Form Review and Edit**
   - After a successful form submission, the user sees a summary of the data they submitted (name, email, and age).
   - A "Back to Form" button is provided to allow the user to return to the form, edit their information, and resubmit if necessary.

## Installation
To get started with the project, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/PLP-WebTechnologies/feb-2025-javascript-events-and-basic-interactivity-scylla8434
   ```

2. **Navigate to the project directory**:

   ```bash
   cd feb-2025-javascript-events-and-basic-interactivity-scylla8434
   ```

3. **Open the `index.html` file** in your browser:

   Double-click the `index.html` file or open it in your preferred browser to view the form and interact with it.

---

## How to Use

1. **Fill Out the Form**:
   - **Full Name**: Enter your full name in the "Full Name" field.
   - **Email Address**: Enter a valid email address in the "Email Address" field.
   - **Age**: Enter your age in the "Age" field. The age must be at least 18.

2. **Submit the Form**:
   - After filling out the form, click the **Submit** button.
   - If any of the fields are invalid (e.g., empty name, invalid email, or age under 18), the form will display an error message near the corresponding field.

3. **View the Submitted Data**:
   - If the form passes validation, you will see a summary of the data you submitted (name, email, and age).
   - A success message will also be displayed at the top.

4. **Edit the Submitted Data**:
   - If you want to make changes, click the **Back to Form** button, which will bring the form back into view with the data you submitted pre-filled.
   - You can make the necessary changes and submit the form again.
