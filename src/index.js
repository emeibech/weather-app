import './styles.css';
import renderWeatherInfo from './modules/renderWeatherInfo';
import { getClientLocation } from './modules/clientLocation';
import searchWhite from './assets/search-svg/search-white.svg';
import searchDefault from './assets/search-svg/search-default.svg';
import clearSVG from './assets/search-svg/clear-white.svg';

const search = document.querySelector('#location');
const imgSearch = document.querySelector('[data-search-svg]');
const clear = document.querySelector('[data-clear]');

document.addEventListener('DOMContentLoaded', async () => {
  const location = await getClientLocation();
  renderWeatherInfo(location);
  search.value = '';
});

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  const location = search.value;
  renderWeatherInfo(location);
  search.placeholder = 'Searching...';
  search.value = '';
  clear.src = '';
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
  clear.addEventListener('mouseup', () => {
    search.value = '';
    clear.src = '';
    search.focus();
  });
});
