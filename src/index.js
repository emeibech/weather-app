import './styles.css';
import searchWhite from './assets/search-svg/search-white.svg';
import searchDefault from './assets/search-svg/search-default.svg';
import clearSVG from './assets/search-svg/clear-white.svg';
import { getClientLocation } from './modules/clientLocation';
import {
  renderWeatherInfo,
  loadingAnimation,
  setToMetric,
  setToImperial,
} from './modules/renderWeatherInfo';

const search = document.querySelector('#location');
const searchSVG = document.querySelector('[data-search-svg]');
const clear = document.querySelector('[data-clear]');
const unitSelector = document.querySelector('[unit-selector]');
const imperialSelector = document.querySelector('[data-imperial]');
const metricSelector = document.querySelector('[data-metric]');

document.addEventListener('DOMContentLoaded', async () => {
  searchSVG.src = searchDefault;
  loadingAnimation();
  const location = await getClientLocation();
  renderWeatherInfo(location);
  search.value = '';
});

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  loadingAnimation();
  const location = search.value;
  renderWeatherInfo(location);
  search.placeholder = 'Searching...';
  search.value = '';
  clear.src = '';
  clear.setAttribute('height', '0');
  clear.setAttribute('width', '0');
  search.blur();
});

search.addEventListener('focus', () => {
  searchSVG.src = searchWhite;
});

search.addEventListener('blur', () => {
  searchSVG.src = searchDefault;
});

search.addEventListener('input', () => {
  clear.src = clearSVG;
  clear.setAttribute('height', '16px');
  clear.setAttribute('width', '16px');
  clear.addEventListener('click', () => {
    search.value = '';
    clear.src = '';
    clear.setAttribute('height', '0');
    clear.setAttribute('width', '0');
    search.focus();
  });
});

unitSelector.addEventListener('click', (event) => {
  if (event.target.type === 'button') {
    if (event.target.value === 'false') {
      imperialSelector.value = 'true';
      imperialSelector.setAttribute('style', 'color: rgb(240, 248, 255)');
      metricSelector.value = 'false';
      metricSelector.setAttribute('style', 'color: rgba(240, 248, 255, 0.5)');
      setToImperial();
    }

    if (event.target.value === 'false') {
      imperialSelector.value = 'false';
      imperialSelector.setAttribute('style', 'color: rgba(240, 248, 255, 0.5)');
      metricSelector.value = 'true';
      metricSelector.setAttribute('style', 'color: rgb(240, 248, 255)');
      setToMetric();
    }
  }
});
