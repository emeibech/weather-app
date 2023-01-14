import './styles.css';
import renderWeatherInfo from './modules/renderWeatherInfo';
import { getClientLocation } from './modules/clientLocation';
import searchWhite from './assets/search-svg/search-white.svg';
import searchDefault from './assets/search-svg/search-default.svg';

const search = document.querySelector('#location');
const imgSearch = document.querySelector('[data-search-svg]');

document.addEventListener('DOMContentLoaded', async () => {
  const location = await getClientLocation();
  renderWeatherInfo(location);
});

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  const input = document.querySelector('#location');
  const location = input.value;
  renderWeatherInfo(location);
  input.value = '';
  input.placeholder = 'Searching...';
});

search.addEventListener('focus', () => {
  imgSearch.src = searchWhite;
});

search.addEventListener('blur', () => {
  imgSearch.src = searchDefault;
});
