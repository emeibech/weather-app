import getCurrentWeatherInfo from './weatherInfo';

/* It's just a function for capitalizing the description.
  There's definitely a better way of doing this but I don't know it just yet. */
const capitalize = (description) => {
  const [first, second] = description;
  const arr1 = first.split('');
  arr1[0] = arr1[0].toUpperCase();
  const arr2 = second.split('');
  arr2[0] = arr2[0].toUpperCase();
  return [arr1.join(''), arr2.join('')].join(' ');
};

const processInfo = async (location) => {
  const info = await getCurrentWeatherInfo(location);
  info.description = capitalize(info.description.split(' '));

  console.log(info);

  document.querySelector('#location').placeholder = 'Enter City';
};

export default processInfo;
