export async function getWeather(props, coords, changeLoadedStatus) {
  let lat = Number(coords[0]);
  let lon = Number(coords[1]);

  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max&timezone=auto&daily=temperature_2m_min&daily=weathercode&current_weather=true`
  );
  const data = await response.json();
  if (response.ok) {
    changeLoadedStatus(true);
  }
  props(data);
}

export function getLocation(props) {
  function showPosition(position) {
    const crd = position.coords;
    props([crd.latitude, crd.longitude]);
  }
  navigator.geolocation.getCurrentPosition(showPosition);
}

export async function getCity(props, coords) {
  let lat = Number(coords[0]);
  let lon = Number(coords[1]);

  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=AIzaSyDfZSN6owoFYzzO8e4pweKdxiFuslsRHqc&language=en`
  );
  const cityData = await response.json();
  props(cityData);
}
