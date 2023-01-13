import './styles.css';
import renderWeatherInfo from './modules/renderWeatherInfo';
import { getClientLocation } from './modules/clientLocation';

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
