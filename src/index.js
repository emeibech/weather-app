import './styles.css';
import getCurrentWeatherInfo from './modules/weatherInfo';

document.addEventListener('DOMContentLoaded', () => {
  console.log(getCurrentWeatherInfo());
});
