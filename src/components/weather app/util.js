export async function getWeather(props, coords) {
  let lat;
  let lon;
  if (coords) {
    lat = Number(coords[0]);
    lon = Number(coords[1]);
  } else {
    lat = parseFloat(sessionStorage.getItem("lat"));
    lon = parseFloat(sessionStorage.getItem("lon"));
  }

  const respose = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max&timezone=auto&daily=temperature_2m_min&daily=weathercode&current_weather=true`
  );
  const data = await respose.json();
  props(data);
}

export function getLocation(props) {
  function showPosition(position) {
    const crd = position.coords;
    sessionStorage.setItem("lat", `${crd.latitude}`);
    sessionStorage.setItem("lon", `${crd.longitude}`);
    // props([crd.latitude, crd.longitude]);
  }
  navigator.geolocation.getCurrentPosition(showPosition);
}

export async function getCity(props, coords) {
  let lat;
  let lon;
  if (coords) {
    lat = Number(coords[0]);
    lon = Number(coords[1]);
  } else {
    lat = parseFloat(sessionStorage.getItem("lat"));
    lon = parseFloat(sessionStorage.getItem("lon"));
  }
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=AIzaSyDfZSN6owoFYzzO8e4pweKdxiFuslsRHqc&language=en`
  );
  const cityData = await response.json();
  props(cityData);
}
