import getCurrentWeatherInfo from './weatherInfo';
import countries from '../countries.json';

// A function for capitalizing first letter of the words in a string.
const capitalize = (description) => description.split(' ')
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

const getPopPercentage = (number) => `${Math.round(number * 100)}%`;

const convertToCelsius = (kelvin) => `${Math.round(kelvin - 273.15)}°C`;
const convertToFahrenheit = (kelvin) => `${Math.round(1.8 * (kelvin - 273.15) + 32)}°F`;

const getReadableTimestamp = (unix) => {
  const newDate = new Date(unix * 1000);
  const time = [newDate.getUTCHours(), newDate.getUTCMinutes()];
  if (time[0] > 12) time.splice(0, 1, time[0] - 12);
  if (time[1] < 10) time.splice(1, 1, `0${time[1]}`);
  return time.join(':');
};

const processInfo = async (location) => {
  const info = await getCurrentWeatherInfo(location);

  document.querySelector('#location').placeholder = 'Search';

  return {
    metric: {
      description: capitalize(info.description),
      pop: getPopPercentage(info.pop),
      humidity: `${info.humidity}%`,
      visibility: `${Math.round(info.visibility / 1000)} km`,
      temp: convertToCelsius(info.temp),
      feelsLike: convertToCelsius(info.feelsLike),
      windSpeed: `${Math.round(info.windSpeed * (18 / 5))} km/h`,
      cloudCover: `${info.cloudCover}%`,
      sunrise: `${getReadableTimestamp(info.sunrise + info.timezone)} AM`,
      sunset: `${getReadableTimestamp(info.sunset + info.timezone)} PM`,
      country: countries[info.country],
      city: capitalize(info.city),
      icon: info.icon,
    },
    imperial: {
      description: capitalize(info.description),
      pop: getPopPercentage(info.pop),
      humidity: `${info.humidity}%`,
      visibility: `${Math.round((info.visibility / 1000) * 0.62137119)} mi`,
      temp: convertToFahrenheit(info.temp),
      feelsLike: convertToFahrenheit(info.feelsLike),
      windSpeed: `${Math.round(info.windSpeed * 2.2369)} mph`,
      cloudCover: `${info.cloudCover}%`,
      sunrise: `${getReadableTimestamp(info.sunrise + info.timezone)} AM`,
      sunset: `${getReadableTimestamp(info.sunset + info.timezone)} PM`,
      country: countries[info.country],
      city: capitalize(info.city),
      icon: info.icon,
    },
  };
};

export default processInfo;
