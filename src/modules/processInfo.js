import getCurrentWeatherInfo from './weatherInfo';
import countries from '../countries.json';

/* This is just a function for capitalizing the description.
  This version look a little bit better than the previous one.
  The "text-transform: capitalize" in CSS seems better and easier, though,
  but I'll stick with this in case I need it in the future. */
const capitalize = (description) => {
  const returnValue = [];

  description.forEach((item) => {
    const word = (`${item}`);
    const firstLetter = word.charAt(0).toUpperCase();
    const remainingLetters = word.slice(1);
    returnValue.push(`${firstLetter}${remainingLetters}`);
  });

  return returnValue.join(' ');
};

const getPercentage = (number) => `${number * 100}%`;

const convertToCelsius = (kelvin) => `${Math.round(kelvin - 273.15)}°C`;

const getReadableTimestamp = (unix) => {
  const dataObj = new Date(unix * 1000);
  const time = [dataObj.getHours(), dataObj.getMinutes()];
  if (time[0] > 12) time.splice(0, 1, time[0] - 12);
  return time.join(':');
};

const processInfo = async (location) => {
  const info = await getCurrentWeatherInfo(location);
  info.description = capitalize(info.description.split(' '));
  info.pop = getPercentage(info.pop);
  info.humidity = `${info.humidity}%`;
  info.visibility = `${info.visibility / 1000} km`;
  info.temp = convertToCelsius(info.temp);
  info.feelsLike = convertToCelsius(info.feelsLike);
  info.tempMin = convertToCelsius(info.tempMin);
  info.tempMax = convertToCelsius(info.tempMax);
  info.windSpeed = `${Math.round(info.windSpeed * (18 / 5))} km/h`;
  info.cloudCover = `${info.cloudCover}%`;
  info.sunrise = `${getReadableTimestamp(info.sunrise)} AM`;
  info.sunset = `${getReadableTimestamp(info.sunset)} PM`;
  info.country = countries[info.country];

  console.log(info);

  document.querySelector('#location').placeholder = 'Enter City';
};

export default processInfo;
