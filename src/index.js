import './styles.css';
import { renderWeatherInfo, loadingAnimation, removeLoadingAnimation } from './modules/renderWeatherInfo';
import { getClientLocation } from './modules/clientLocation';
import searchWhite from './assets/search-svg/search-white.svg';
import searchDefault from './assets/search-svg/search-default.svg';
import clearSVG from './assets/search-svg/clear-white.svg';

const search = document.querySelector('#location');
const imgSearch = document.querySelector('[data-search-svg]');
const clear = document.querySelector('[data-clear]');

document.addEventListener('DOMContentLoaded', async () => {
  loadingAnimation();
  const location = await getClientLocation();
  renderWeatherInfo(location);

  setTimeout(() => {
    removeLoadingAnimation();
  }, 250);

  search.value = '';
});

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
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
  imgSearch.src = searchWhite;
});

search.addEventListener('blur', () => {
  imgSearch.src = searchDefault;
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
