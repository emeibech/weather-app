import processInfo from './processInfo';
import icons from '../assets/icons/icons';

const city = document.querySelector('[data-city]');
const icon = document.querySelector('[data-icon]');
const description = document.querySelector('[data-description]');
const moreInfo = document.querySelector('[data-more-info]');

const renderWeatherInfo = async (location) => {
  const { metric, imperial } = await processInfo(location);

  city.textContent = `${metric.city}, ${metric.country}`;
  icon.src = icons[metric.icon];
  icon.setAttribute('alt', metric.description);
  description.textContent = metric.description;
  moreInfo.firstChild.textContent = `Chance of Rain: ${metric.pop}`;
  moreInfo.firstChild.nextSibling.textContent = `Humidity: ${metric.humidity}`;
  moreInfo.lastChild.textContent = `Visibility: ${metric.visibility}`;

  console.log(metric);
};

export default renderWeatherInfo;
