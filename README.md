# Website Screenshot Generator

This project

allows users to generate a screenshot of any website by entering the website URL. The screenshot is generated using the Apiflash API and the full-page screenshot is displayed on the webpage.

## Technologies Used

    * React
    * Apiflash API
    * JavaScript

## Features

    Users can enter the URL of any website
    Full-page screenshot of the website is generated and displayed
    Users can click on the screenshot to open the website in a new tab

## Installation and Usage
```
    1. Clone the repository
    2. Navigate to the project directory
    3. Run `npm install` to install the dependencies
    4. Create a `.env` file in the root directory and add your Apiflash API key in the following format: `REACT_APP_API_KEY=YOUR_API_KEY`
    5. Run `npm start` to start the development server
```
## Documentation

In this project, we learned how to use an API to generate a screenshot of a website by passing in a URL. We utilized the Apiflash API and passed in the required parameters to get a full-page screenshot of the website.

We also learned how to change the state of a React component using the `useState` hook. We used this hook to store the URL entered by the user and also to store the generated image URL from the API.

We made use of the `async` and `await` keywords to make asynchronous API calls and to ensure that the response is resolved before we proceed to the next step in our code.

We used the `fetch` function to make `HTTP requests` to the Apiflash API and we used the `blob` method to retrieve the binary data from the response. We then used the `URL.createObjectURL()` method to create a URL for the binary data, which we used to display the image on the webpage.
