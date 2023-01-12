import getCurrentWeatherInfo from './weatherInfo';
import countries from '../countries.json';

// This is just a function for capitalizing the description.
const capitalize = (description) => description.split(' ')
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

const getPercentage = (number) => `${number * 100}%`;

const convertToCelsius = (kelvin) => `${Math.round(kelvin - 273.15)}°C`;
const convertToFahrenheit = (kelvin) => `${Math.round(1.8 * (kelvin - 273.15) + 32)}°F`;

const getReadableTimestamp = (unix) => {
  const dataObj = new Date(unix * 1000);
  const time = [dataObj.getUTCHours(), dataObj.getUTCMinutes()];
  if (time[0] > 12) time.splice(0, 1, time[0] - 12);
  if (time[1] < 10) time.splice(1, 1, `0${time[1]}`);
  return time.join(':');
};

const processInfo = async (location) => {
  const info = await getCurrentWeatherInfo(location);

  document.querySelector('#location').placeholder = 'Enter City';

  console.log({
    metric: {
      description: capitalize(info.description),
      pop: getPercentage(info.pop),
      humidity: `${info.humidity}%`,
      visibility: `${Math.round(info.visibility / 1000)} km`,
      temp: convertToCelsius(info.temp),
      feelsLike: convertToCelsius(info.feelsLike),
      tempMin: convertToCelsius(info.tempMin),
      tempMax: convertToCelsius(info.tempMax),
      windSpeed: `${Math.round(info.windSpeed * (18 / 5))} km/h`,
      cloudCover: `${info.cloudCover}%`,
      sunrise: `${getReadableTimestamp(info.sunrise + info.timezone)} AM`,
      sunset: `${getReadableTimestamp(info.sunset + info.timezone)} PM`,
      country: countries[info.country],
    },
    imperial: {
      description: capitalize(info.description),
      pop: getPercentage(info.pop),
      humidity: `${info.humidity}%`,
      visibility: `${Math.round((info.visibility / 1000) * 0.62137119)} mi`,
      temp: convertToFahrenheit(info.temp),
      feelsLike: convertToFahrenheit(info.feelsLike),
      tempMin: convertToFahrenheit(info.tempMin),
      tempMax: convertToFahrenheit(info.tempMax),
      windSpeed: `${Math.round(info.windSpeed * 2.2369)} mph`,
      cloudCover: `${info.cloudCover}%`,
      sunrise: `${getReadableTimestamp(info.sunrise + info.timezone)} AM`,
      sunset: `${getReadableTimestamp(info.sunset + info.timezone)} PM`,
      country: countries[info.country],
    },
  });
};

export default processInfo;
