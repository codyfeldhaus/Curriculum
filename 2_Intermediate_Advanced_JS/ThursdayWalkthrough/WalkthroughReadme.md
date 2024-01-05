# Week 2: Intermediate/Advanced JavaScript Techniques

## Thursday - Project Walkthrough: Weather Application

## Instructor Guide
---

### Objective
To build a weather application that fetches and displays weather data from the OpenWeather API using modern JavaScript features.

---

### Project Setup
- **Task**: Set up the basic structure of the project.
- **Instructions**:
  1. Create a new folder `weather-app`.
  2. Inside the folder, create `index.html`, `style.css`, and `script.js`.
  3. Obtain an API key from OpenWeather API (instructor to provide guidance).

---

### Building the HTML Structure (index.html)
- **Task**: Write the HTML structure for the weather application.
- **Code Snippet**:
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Weather App</title>
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <div id="app">
          <input type="text" id="searchBox" placeholder="Enter city name">
          <button id="searchButton">Get Weather</button>
          <div id="weatherDisplay"></div>
      </div>
      <script src="script.js"></script>
  </body>
  </html>
  ```

---

### Styling the Application (style.css)
- **Task**: Add basic styling to the application.
- **Code Snippet**:
  ```css
  body {
      font-family: Arial, sans-serif;
      text-align: center;
      padding: 20px;
  }
  #weatherDisplay {
      margin-top: 20px;
      border: 1px solid #ddd;
      padding: 10px;
  }
  ```

---

### Adding JavaScript Functionality (script.js)
- **Task**: Implement the JavaScript to fetch and display weather data.
- **Step-by-Step Instructions**:
  1. **Setup Event Listener for Search**:
     - Add an event listener to the search button.
     - **Code Snippet**:
       ```javascript
       document.getElementById('searchButton').addEventListener('click', function() {
           const city = document.getElementById('searchBox').value;
           fetchWeather(city);
       });
       ```
  2. **Fetch Weather Data**:
     - Create a function `fetchWeather` to call the OpenWeather API.
     - Use async/await for handling the asynchronous request.
     - **Code Snippet**:
       ```javascript
       async function fetchWeather(city) {
           const apiKey = 'YOUR_API_KEY'; // Replace with your API key
           const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
           try {
               const response = await fetch(url);
               const data = await response.json();
               displayWeather(data);
           } catch (error) {
               console.error('Error fetching weather:', error);
           }
       }
       ```
  3. **Display Weather Data**:
     - Create a function `displayWeather` to update the DOM with weather data.
     - **Code Snippet**:
       ```javascript
       function displayWeather(data) {
           const weatherDisplay = document.getElementById('weatherDisplay');
           weatherDisplay.innerHTML = `
               <h2>Weather in ${data.name}</h2>
               <p>Temperature: ${data.main.temp}°C</p>
               <p>Humidity: ${data.main.humidity}%</p>
               <p>Wind Speed: ${data.wind.speed}m/s</p>
           `;
       }
       ```

---

### Testing and Debugging
- **Task**: Run the application and ensure it works as expected.
- **Instructions**:
  - Test different city names.
  - Check for any layout issues or JavaScript errors.
  - Use browser developer tools for debugging.

---

### Challenge: Enhance the Application
- **Optional Tasks**:
  - Add weather icons and more detailed weather information.
  - Implement error handling for city not found.
  - Style the application for a better user interface.

---

# **_To Consider_**
- is this too short? if so can implement option tasks?