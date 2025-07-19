// SELECT HTML ELEMENTS IN THE DOCUMENT
const currentTemp = document.getElementById("current-temp");
const weatherIcon = document.getElementById("weather-icon");
const captionDesc = document.querySelector("figcaption");

// CREATE REQUIRED VARIABLES FOR THE URL
const myKey = "5dd1e3c24fe9ab8570645faecbe00773"
const myLat = "49.750353331454306"
const myLong = "6.64053121715929"
const url = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

// TRY GRAB THE CURRENT WEATHER DATA

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

  function displayResults(data) {
    captionDesc.innerHTML = data.weather[0].description;
    currentTemp.innerHTML = `${data.main.temp} &deg;F`;
    const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute("SRC", iconSrc);
    weatherIcon.setAttribute("alt", data.weather[0].description);
  }

