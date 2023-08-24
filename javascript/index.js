function updateTime() {
  let moscowElement = document.querySelector("#moscow");
  if (moscowElement) {
    let moscowDateElement = moscowElement.querySelector(".date");
    let moscowTimeElement = moscowElement.querySelector(".time");
    moscowDateElement.innerHTML = moment()
      .tz("Europe/moscow")
      .format("dddd Do MMMM YYYY");
    moscowTimeElement.innerHTML = moment()
      .tz("Europe/Moscow")
      .format("HH:mm:ss [<small>]A[</small>]");
  }
  let torontoElement = document.querySelector("#toronto");
  if (torontoElement) {
    let torontoDateElement = torontoElement.querySelector(".date");
    let torontoTimeElement = torontoElement.querySelector(".time");
    torontoDateElement.innerHTML = moment()
      .tz("America/Toronto")
      .format("dddd Do MMMM YYYY");
    torontoTimeElement.innerHTML = moment()
      .tz("America/Toronto")
      .format("HH:mm:ss [<small>]A[</small>]");
  }
  let istanbulElement = document.querySelector("#istanbul");
  if (istanbulElement) {
    let istanbulDateElement = istanbulElement.querySelector(".date");
    let istanbulTimeElement = istanbulElement.querySelector(".time");
    istanbulDateElement.innerHTML = moment()
      .tz("Europe/Istabul")
      .format("dddd Do MMMM YYYY");
    istanbulTimeElement.innerHTML = moment()
      .tz("Europe/Istabul")
      .format("HH:mm:ss [<small>]A[</small>]");}


  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    tokyoDateElement.innerHTML = moment()
      .tz("Asia/Tokyo")
      .format("dddd Do MMMM YYYY");
    tokyoTimeElement.innerHTML = moment()
      .tz("Asia/Tokyo")
      .format("HH:mm:ss [<small>]A[</small>]");
  }
    let dohaElement = document.querySelector("#doha");
  if (dohaElement) {
    let dohaDateElement = dohaElement.querySelector(".date");
    let dohaTimeElement = dohaElement.querySelector(".time");
    dohaDateElement.innerHTML = moment()
      .tz("Asia/Qatar")
      .format("dddd Do MMMM YYYY");
    dohaTimeElement.innerHTML = moment()
      .tz("Asia/Qatar")
      .format("HH:mm:ss [<small>]A[</small>]");
    }

}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  <a href="/">All cities</a>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
