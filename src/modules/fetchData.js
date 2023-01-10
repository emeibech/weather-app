const fetchData = async (url) => {
  try {
    const response = await fetch(url, { mode: 'cors' });
    const data = await response.json();
    return data;
  } catch (err) {
    return console.log(err);
  }
};

export default fetchData;
