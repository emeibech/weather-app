import './styles.css';
import { getCurrentWeatherInfo, eventHandler, getUserLocation } from './modules/eventHandler';

document.addEventListener('DOMContentLoaded', async () => {
  const location = await getUserLocation();
  getCurrentWeatherInfo(location);
});

document.addEventListener('submit', (event) => {
  event.preventDefault();
  eventHandler();
});
