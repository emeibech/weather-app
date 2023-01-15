import processInfo from './processInfo';
import icons from '../assets/icons/icons';

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
const metricSelector = document.querySelector('[data-metric]');
const imperialSelector = document.querySelector('[data-imperial]');
let metricData;
let imperialData;

const loadingAnimation = () => {
  const main = document.querySelector('main');
  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  const spinner = document.createElement('div');
  spinner.className = 'spinner';
  overlay.appendChild(spinner);
  main.appendChild(overlay);
};

const removeLoadingAnimation = () => {
  const main = document.querySelector('main');
  main.removeChild(main.lastChild);
};

const setToMetric = () => {
  visibility.textContent = metricData.visibility;
  temp.textContent = metricData.temp;
  feelsLike.textContent = ` ${metricData.feelsLike}`;
  windSpeed.textContent = metricData.windSpeed;
};

const setToImperial = () => {
  visibility.textContent = imperialData.visibility;
  temp.textContent = imperialData.temp;
  feelsLike.textContent = ` ${imperialData.feelsLike}`;
  windSpeed.textContent = imperialData.windSpeed;
};

const renderWeatherInfo = async (location) => {
  const { metric, imperial } = await processInfo(location);

  metricData = { ...metric };
  imperialData = { ...imperial };

  city.textContent = `${metric.city}, ${metric.country}`;
  icon.src = icons[metric.icon];
  icon.setAttribute('alt', metric.description);
  description.textContent = metric.description;
  precipitation.textContent = metric.pop;
  humidity.textContent = metric.humidity;
  cloudCover.textContent = metric.cloudCover;
  sunrise.textContent = metric.sunrise;
  sunset.textContent = metric.sunset;

  if (metricSelector.value === 'true') setToMetric();
  if (imperialSelector.value === 'true') setToImperial();

  removeLoadingAnimation();
};

export {
  renderWeatherInfo,
  loadingAnimation,
  setToMetric,
  setToImperial,
};
