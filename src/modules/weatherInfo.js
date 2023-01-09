const location = 'Manila';
const currentWeatherInfo = {};
const appID = 'a864b3057d366f0312e36cebd74c7077';
const rawURL = `https://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${appID}`;

const fetchData = async (url) => {
  const response = await fetch(url, { mode: 'cors' });
  const data = await response.json();
  return data;
};

const geocodeURL = async (type) => {
  const data = await fetchData(rawURL);
  const geocodedURL = `https://api.openweathermap.org/data/2.5/${type}?lat=${data[0].lat}&lon=${data[0].lon}&cnt=&appid=${appID}`;
  return geocodedURL;
};

const getWeatherData = async () => {
  const url = await geocodeURL('weather');
  const data = await fetchData(url);
  return data;
};

const getForecastData = async () => {
  const url = await geocodeURL('forecast');
  const data = await fetchData(url);
  return data;
};

const getWeatherInfo = async () => {
  const data = await Promise.all([getWeatherData(), getForecastData()]);

  const [weatherData, forecastData] = data;

  currentWeatherInfo.description = weatherData.weather[0].description;
  currentWeatherInfo.pop = forecastData.list[0].pop;
  currentWeatherInfo.humidity = weatherData.main.humidity;
  currentWeatherInfo.visibility = weatherData.visibility;
  currentWeatherInfo.temp = weatherData.main.temp;
  currentWeatherInfo.feelsLike = weatherData.main.feels_like;
  currentWeatherInfo.tempMin = weatherData.main.temp_min;
  currentWeatherInfo.tempMax = weatherData.main.temp_max;
  currentWeatherInfo.windSpeed = weatherData.wind.speed;
  currentWeatherInfo.cloudCover = weatherData.clouds.all;
  currentWeatherInfo.sunrise = weatherData.sys.sunrise;
  currentWeatherInfo.sunset = weatherData.sys.sunset;
};

getWeatherInfo();

const getCurrentWeatherInfo = () => currentWeatherInfo;

export default getCurrentWeatherInfo;
