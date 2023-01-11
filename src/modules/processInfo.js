import getCurrentWeatherInfo from './weatherInfo';

const processInfo = async (location) => {
  const info = await getCurrentWeatherInfo(location);
  console.log(info);
  document.querySelector('#location').placeholder = 'Enter City';
};

export default processInfo;
