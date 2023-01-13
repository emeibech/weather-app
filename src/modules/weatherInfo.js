import { fetchData } from './clientLocation';

const getCurrentWeatherInfo = (location) => {
  const appID = 'a864b3057d366f0312e36cebd74c7077';
  const rawURL = `https://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${appID}`;

  const geocodeURL = async (type) => {
    try {
      const data = await fetchData(rawURL);
      const geocodedURL = `https://api.openweathermap.org/data/2.5/${type}?lat=${data[0].lat}&lon=${data[0].lon}&cnt=&appid=${appID}`;
      return geocodedURL;
    } catch (err) {
      return console.log(err);
    }
  };

  const getWeatherData = async () => {
    try {
      const url = await geocodeURL('weather');
      const data = await fetchData(url);
      return data;
    } catch (err) {
      return console.log(err);
    }
  };

  const getForecastData = async () => {
    try {
      const url = await geocodeURL('forecast');
      const data = await fetchData(url);
      return data;
    } catch (err) {
      return console.log(err);
    }
  };

  const getWeatherInfo = async () => {
    const data = await Promise.all([getWeatherData(), getForecastData()]);

    const [weatherData, forecastData] = data;

    return {
      description: weatherData.weather[0].description,
      pop: forecastData.list[0].pop,
      humidity: weatherData.main.humidity,
      visibility: weatherData.visibility,
      temp: weatherData.main.temp,
      feelsLike: weatherData.main.feels_like,
      tempMin: weatherData.main.temp_min,
      tempMax: weatherData.main.temp_max,
      windSpeed: weatherData.wind.speed,
      cloudCover: weatherData.clouds.all,
      sunrise: weatherData.sys.sunrise,
      sunset: weatherData.sys.sunset,
      country: weatherData.sys.country,
      timezone: weatherData.timezone,
      city: location,
      icon: weatherData.weather[0].icon,
    };
  };

  return getWeatherInfo();
};

export default getCurrentWeatherInfo;
