import fetchData from './fetchData';

const getUserLocation = async () => {
  try {
    const data = await fetchData('https://api.ipgeolocation.io/ipgeo?apiKey=df5e9583bdd34c66a9f3113f5a78174e');
    return data.city;
  } catch (err) {
    return console.log(err);
  }
};

export { fetchData, getUserLocation };
