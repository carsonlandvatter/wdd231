const currentTemp = document.getElementById("current-temp");
const tempIcon = document.getElementById("weather-icon");
const description = document.getElementById("description");

//Create variables for url
const myKey = "5dd1e3c24fe9ab8570645faecbe00773";
const myLat = "33.65848657624823";
const myLon = "-117.9969439947934";
const url = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&appid=${myKey}&units=imperial`;

//Try grab the current weather data
async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        displayResults(data);
        console.log(data);
        // displayResults(data); // uncomment when ready
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

  //display results
  function displayResults(data) {
    description.innerHTML = data.weather[0].description;
    const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    tempIcon.setAttribute("SRC", iconSrc);
    tempIcon.setAttribute('alt', data.weather[0].description);
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  }