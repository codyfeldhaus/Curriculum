document.getElementById('searchButton').addEventListener('click', function() {
  const city = document.getElementById('searchBox').value;
  fetchWeather(city);
});

async function fetchWeather(city) {
  const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  try {
      const response = await fetch(url);
      const data = await response.json();
      displayWeather(data);
  } catch (error) {
      console.error('Error fetching weather:', error);
      displayError(error);
  }
}

function displayWeather(data) {
  const weatherDisplay = document.getElementById('weatherDisplay');
  if (data.cod === 200) {
      weatherDisplay.innerHTML = `
          <h2>Weather in ${data.name}</h2>
          <p>Temperature: ${data.main.temp}°C</p>
          <p>Humidity: ${data.main.humidity}%</p>
          <p>Wind Speed: ${data.wind.speed}m/s</p>
      `;
  } else {
      weatherDisplay.innerHTML = `<p>${data.message}</p>`;
  }
}

function displayError(error) {
  const weatherDisplay = document.getElementById('weatherDisplay');
  weatherDisplay.innerHTML = `<p>Error: ${error.message}. Please try again.</p>`;
}
