const currentTemp = document.getElementById("current-temp");
const tempIcon = document.getElementById("weather-icon");
const description = document.getElementById("description");
const today = document.getElementById("today");
const tomorrow = document.getElementById("tomorrow");
const other = document.getElementById("other");

//Create variables for url
const myKey = "";
const myLat = "33.65848657624823";
const myLon = "-117.9969439947934";
const url = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&appid=${myKey}&units=imperial`;
const forecastURL = `//api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLon}&appid=${myKey}&units=imperial`;

//Try grab the current weather data
async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        displayResults(data);
        // displayResults(data); // uncomment when ready
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

  //Try grab the forecast url
  async function forecastFetch() {
    try {
      const response = await fetch(forecastURL);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayForecast(data);
        // displayResults(data); // uncomment when ready
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
 forecastFetch();
 //display forecast
 function displayForecast(data) {
  today.innerHTML = Math.round(data.list[0].main.temp);
  tomorrow.innerHTML = Math.round(data.list[8].main.temp);
  other.innerHTML = Math.round(data.list[16].main.temp);
 }

  //display results
  function displayResults(data) {
    description.innerHTML = data.weather[0].description;
    const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    tempIcon.setAttribute("SRC", iconSrc);
    tempIcon.setAttribute('alt', data.weather[0].description);
    temperature = data.main.temp;
    roundedTemp = Math.round(temperature);
    currentTemp.innerHTML = `${roundedTemp}&deg;F`;
  }