import clearWeather from "./weatherIcons/sun-light.png";
import overcast from "./weatherIcons/partial-cloudy-light.png";
import fog from "./weatherIcons/heavy-wind-light.png";
import drizzle from "./weatherIcons/rainyday-light.png";
import freezingDrizzle from "./weatherIcons/snow-light.png";
import rain from "./weatherIcons/rain-light.png";
import freezingRain from "./weatherIcons/snow-light.png";
import snow from "./weatherIcons/heavy-snowfall-light.png";
import snowGrains from "./weatherIcons/hailstrom-light.png";
import heavyRain from "./weatherIcons/heavy-rain-light.png";
import heavySnow from "./weatherIcons/heavy-snowfall-light.png";
import thunderStom from "./weatherIcons/thunderstorm-light.png";

export function WeatherIcon(props) {
  switch (props.weatherCode) {
    case "0":
      return <img src={clearWeather}></img>;
    case "1":
    case "2":
    case "3":
      return <img src={overcast}></img>;
    case "45":
    case "48":
      return <img src={fog}></img>;
    case "51":
    case "53":
    case "55":
      return <img src={drizzle}></img>;
    case "56":
    case "57":
      return <img src={freezingDrizzle}></img>;
    case "61":
    case "63":
    case "65":
      return <img src={rain}></img>;
    case "66":
    case "67":
      return <img src={freezingRain}></img>;
    case "71":
    case "73":
    case "75":
      return <img src={snow}></img>;
    case "77":
      return <img src={snowGrains}></img>;
    case "80":
    case "81":
    case "82":
      return <img src={heavyRain}></img>;
    case "85":
    case "86":
      return <img src={heavySnow}></img>;
    case "95":
    case "96":
    case "99":
      return <img src={thunderStom}></img>;
  }
}
