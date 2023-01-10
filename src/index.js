import './styles.css';
import { getCurrentWeatherInfo, eventHandler } from './modules/dataHandler';

document.addEventListener('DOMContentLoaded', () => {
  getCurrentWeatherInfo('Manila');
});

document.addEventListener('submit', (event) => {
  event.preventDefault();
  eventHandler();
});
