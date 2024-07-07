function updateTime() {
  //LA
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".city-date");
    let losAngelesTimeElement =
      losAngelesElement.querySelector(".city-timezone");
    let losAngelesTime = moment();
    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do, YYYY");
    losAngelesTimeElement.innerHTML = `${losAngelesTime
      .tz("America/Los_Angeles")
      .format("HH:mm:ss [<small>]A[</small>]")}`;
  }

  //Amsterdam
  let amsterdamElement = document.querySelector("#amsterdam");
  if (amsterdamElement) {
    let amsterdamDateElement = amsterdamElement.querySelector(".city-date");
    let amsterdamTimeElement = amsterdamElement.querySelector(".city-timezone");
    let amsterdamTime = moment();

    amsterdamDateElement.innerHTML = amsterdamTime.format("MMMM Do, YYYY");
    amsterdamTimeElement.innerHTML = `${amsterdamTime
      .tz("Europe/Amsterdam")
      .format("HH:mm:ss [<small>]A[</small>]")}`;
  }

  //Berlin
  let berlinElement = document.querySelector("#berlin");
  if (berlinElement) {
    let berlinDateElement = berlinElement.querySelector(".city-date");
    let berlinTimeElement = berlinElement.querySelector(".city-timezone");
    let berlinTime = moment();

    berlinDateElement.innerHTML = berlinTime.format("MMMM Do, YYYY");
    berlinTimeElement.innerHTML = `${berlinTime
      .tz("Europe/Berlin")
      .format("HH:mm:ss [<small>]A[</small>]")}`;
  }
}

//Dropdown Select
function selectedCity(event) {
  let cityTimezone = event.target.value;
  if (cityTimezone == "current") {
    cityTimezone = moment.tz.guess();
  }
  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimezone);
  let updateCity = document.querySelector("#cities");
  updateCity.innerHTML = `<div class="city">
  <div>
  <h2>${cityName}</h2>
  <div class="city-date">${cityTime.format("MMMM Do, YYYY")}</div>
  </div>
  <div class="city-timezone">${cityTime.format(
    "HH:mm:ss [<small>]A[</small>]"
  )}</div>
    </div>
    <a href="index.html">All Cities</a>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelect = document.querySelector("#dropdown-cities");
citiesSelect.addEventListener("change", selectedCity);
