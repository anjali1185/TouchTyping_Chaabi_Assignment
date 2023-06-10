# Touch Typing Web Application

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Test Cases](#test-cases)

## Introduction

Touch typing is a valuable skill that can significantly improve your productivity and efficiency when working with computers. This web application focuses on practicing the 8 keys of the keyboard (asdfjkl;). By practicing these keys regularly, you can enhance your muscle memory and typing accuracy.

## Features

### Must-Haves

1. *Typing Box:* A dedicated area where you can type the keys.
2. *Visual Cues:* Visual representation of the next key you are supposed to type.
3. *Performance Tracking:* Measurement of the number of keys pressed within a 5-minute window of practice.
4. *Accuracy Percentage:* Calculation of your typing accuracy as a percentage.

### Nice-to-Have Features

1. *Appropriate Images:* Utilization of relevant images to enhance the user interface.
2. *CSS3 Styling:* Implementation of modern CSS3 styles for appealing design and layout.
3. *React State Management:* Utilization of a state management tool for efficient management of application state.

## Getting Started

To get started with the Touch Typing Web Application, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/your-repository.git`
2. Navigate to the project directory: `cd your-repository`
3. Install the required dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your web browser and visit: `http://localhost:3000`

## Usage

1. Landing Page: Upon launching the application, you will see a landing page. Click the "Start Practicing" button to proceed.
2. Main Page: You will be directed to the main page, where you will find an input box and a virtual keyboard. The page also displays information such as the next key to be pressed, accuracy percentage, time limit, and the number of keys pressed.
3. Typing Practice: To practice touch typing, type the same key as indicated in the "Next Key" section. If you press the correct key, your accuracy will remain unaffected. However, pressing an incorrect key will reduce your accuracy.
4. Virtual Keyboard: As you press keys, the virtual keyboard will reflect the keys you have pressed and indicate the location of the next key to be pressed.
5. 5-Minute Window: After 5 minutes of practice, a modal will appear displaying the total number of keys pressed, the number of correct keys pressed, the number of incorrect keys pressed, and a message based on your accuracy value.
6. Idle Time: If you do not type anything during the 5-minute practice window, a modal will appear with a specific message.

## Technologies Used

This web application is built using the following technologies:

- React.js
- HTML5
- CSS3
- JavaScript
- React State Management

## Test Cases

Here are multiple test cases you can consider for testing your web app:

1. *Typing Correct Keys:* Type the correct keys (asdfjkl;) as indicated in the "Next Key" section and verify that the accuracy percentage remains unaffected.

2. *Typing Incorrect Keys:* Type incorrect keys and verify that the accuracy percentage decreases accordingly.

3. *Virtual Keyboard Highlight:* Verify that the virtual keyboard highlights the keys you press correctly and updates the location of the next key to be pressed.

4. *Performance Tracking:* Type a series of keys within the 5-minute practice window and verify that the number of keys pressed is accurately tracked.

5. *Idle Time Handling:* Let the 5-minute practice window elapse without typing anything and verify that the modal appears with the appropriate message.

6. *Modal Content:* After the 5-minute practice window, verify that the modal displays the correct information, including the total number of keys pressed, the number of correct keys pressed, the number of incorrect keys pressed, and a message based on the accuracy value.

7. *Start Practicing Button:* Click on the "Start Practicing" button on the landing page and verify that it redirects to the main page correctly.

8. *CSS Styling:* Ensure that the CSS3 styles are applied correctly, providing an appealing design and layout.

9. *Responsive Design:* Test the application on different devices and screen sizes to ensure a responsive user experience.

10. *State Management:* If you are using a state management tool (e.g., Redux, MobX), verify that the application state is managed correctly and updates are reflected as expected.

11. *Error Handling:* Test for any error scenarios, such as entering invalid input or encountering network issues, and ensure that appropriate error messages or fallbacks are displayed.

12. *Cross-Browser Compatibility:* Test the web app on different browsers (e.g., Chrome, Firefox, Safari) to ensure compatibility and consistent behavior across platforms.

These test cases cover various aspects of your web app, including functionality, user experience, performance tracking, error handling, and cross-browser compatibility. Adapt them as needed based on your specific application requirements and features.

Feel free to contribute to this project by submitting bug reports, feature requests, or pull requests. Happy typing!
