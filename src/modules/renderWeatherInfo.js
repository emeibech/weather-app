import processInfo from './processInfo';
import icons from '../assets/icons/icons';

const city = document.querySelector('[data-city]');
const icon = document.querySelector('[data-icon]');
const description = document.querySelector('[data-description]');
const precipitation = document.querySelector('[data-pop]');
const humidity = document.querySelector('[data-humidity]');
const visibility = document.querySelector('[data-visibility]');

const renderWeatherInfo = async (location) => {
  const { metric, imperial } = await processInfo(location);

  city.textContent = `${metric.city}, ${metric.country}`;
  icon.src = icons[metric.icon];
  icon.setAttribute('alt', metric.description);
  description.textContent = metric.description;
  precipitation.textContent = metric.pop;
  humidity.textContent = metric.humidity;
  visibility.textContent = metric.visibility;

  console.log(metric);
};

export default renderWeatherInfo;
