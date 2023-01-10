import { getCurrentWeatherInfo, getUserLocation } from './weatherInfo';

const eventHandler = () => {
  const input = document.querySelector('#location');
  const location = input.value;
  getCurrentWeatherInfo(location);
};

export { eventHandler, getCurrentWeatherInfo, getUserLocation };
