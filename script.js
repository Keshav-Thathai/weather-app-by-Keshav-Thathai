async function getWeather() {

  let city = document.getElementById("city").value;

  if(city === ""){
    alert("Enter city");
    return;
  }

  try {

    let response = await fetch(
      `https://wttr.in/${city}?format=j1`
    );

    let data = await response.json();

    let temp =
    data.current_condition[0].temp_C;

    if(temp == undefined){

      document.getElementById("result").innerText =
      "Invalid city";

    }

    else{

      document.getElementById("result").innerText =
      `Temperature in ${city}: ${temp}°C`;

    }

  }

  catch(error){

    document.getElementById("result").innerText =
    "Invalid city";

  }

}
if ("serviceWorker" in navigator) {

  navigator.serviceWorker.register("service-worker.js");

}




