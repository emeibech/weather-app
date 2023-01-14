import processInfo from './processInfo';
import icons from '../assets/icons/icons';
import searchSVG from '../assets/search-svg/search-default.svg';

const city = document.querySelector('[data-city]');
const icon = document.querySelector('[data-icon]');
const description = document.querySelector('[data-description]');
const precipitation = document.querySelector('[data-pop]');
const humidity = document.querySelector('[data-humidity]');
const visibility = document.querySelector('[data-visibility]');
const temp = document.querySelector('[data-temp]');
const feelsLike = document.querySelector('[data-feels-like]');
const windSpeed = document.querySelector('[data-wind-speed]');
const cloudCover = document.querySelector('[data-cloud-cover]');
const sunrise = document.querySelector('[data-sunrise]');
const sunset = document.querySelector('[data-sunset]');
const imgSearch = document.querySelector('[data-search-svg]');

imgSearch.src = searchSVG;

const renderWeatherInfo = async (location) => {
  const { metric, imperial } = await processInfo(location);

  city.textContent = `${metric.city}, ${metric.country}`;
  icon.src = icons[metric.icon];
  icon.setAttribute('alt', metric.description);
  description.textContent = metric.description;
  precipitation.textContent = metric.pop;
  humidity.textContent = metric.humidity;
  visibility.textContent = metric.visibility;
  temp.textContent = metric.temp;
  feelsLike.textContent = metric.feelsLike;
  windSpeed.textContent = metric.windSpeed;
  cloudCover.textContent = metric.cloudCover;
  sunrise.textContent = metric.sunrise;
  sunset.textContent = metric.sunset;

  console.log(metric);
};

export default renderWeatherInfo;
