//LA
function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".city-date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".city-timezone");
  let losAngelesTime = moment();

  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do, YYYY");
  losAngelesTimeElement.innerHTML = `${losAngelesTime
    .tz("America/Los_Angeles")
    .format("HH:mm:ss [<small>]A[</small>]")}`;
  //Amsterdam
  let amsterdamElement = document.querySelector("#amsterdam");
  let amsterdamDateElement = amsterdamElement.querySelector(".city-date");
  let amsterdamTimeElement = amsterdamElement.querySelector(".city-timezone");
  let amsterdamTime = moment();

  amsterdamDateElement.innerHTML = amsterdamTime.format("MMMM Do, YYYY");
  amsterdamTimeElement.innerHTML = `${amsterdamTime
    .tz("Europe/Amsterdam")
    .format("HH:mm:ss [<small>]A[</small>]")}`;

  //Berlin
  let berlinElement = document.querySelector("#berlin");
  let berlinDateElement = berlinElement.querySelector(".city-date");
  let berlinTimeElement = berlinElement.querySelector(".city-timezone");
  let berlinTime = moment();

  berlinDateElement.innerHTML = berlinTime.format("MMMM Do, YYYY");
  berlinTimeElement.innerHTML = `${berlinTime
    .tz("Europe/Berlin")
    .format("HH:mm:ss [<small>]A[</small>]")}`;
}
updateTime();
setInterval(updateTime, 1000);
