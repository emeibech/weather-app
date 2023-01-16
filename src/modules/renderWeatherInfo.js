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
  overlay.setAttribute('data-overlay', '');
  const spinner = document.createElement('div');
  spinner.className = 'spinner';
  overlay.appendChild(spinner);
  main.appendChild(overlay);
};

const removeOverlay = () => {
  const main = document.querySelector('main');
  const overlay = document.querySelector('[data-overlay]');
  if (overlay !== null) main.removeChild(overlay);
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
  try {
    const info = await processInfo(location);

    if (info.cod > 399) {
      removeOverlay();

      const main = document.querySelector('main');
      const overlay = document.createElement('div');
      overlay.className = 'overlay';
      overlay.setAttribute('data-overlay', '');
      const errorMessage = document.createElement('h3');
      errorMessage.textContent = `${info.message.charAt(0).toUpperCase() + info.message.slice(1)}. Try searching for a different location.`;
      overlay.appendChild(errorMessage);
      main.appendChild(overlay);
    }

    if (info.cod === undefined) {
      metricData = { ...info.metric };
      imperialData = { ...info.imperial };

      city.textContent = `${metricData.city}, ${metricData.country}`;
      icon.src = icons[metricData.icon];
      icon.setAttribute('alt', metricData.description);
      description.textContent = metricData.description;
      precipitation.textContent = metricData.pop;
      humidity.textContent = metricData.humidity;
      cloudCover.textContent = metricData.cloudCover;
      sunrise.textContent = metricData.sunrise;
      sunset.textContent = metricData.sunset;

      if (metricSelector.value === 'true') setToMetric();
      if (imperialSelector.value === 'true') setToImperial();

      removeOverlay();
    }
  } catch (err) {
    console.log(err);
  }
};

export {
  renderWeatherInfo,
  loadingAnimation,
  setToMetric,
  setToImperial,
  removeOverlay,
};
