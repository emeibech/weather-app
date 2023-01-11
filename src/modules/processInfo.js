import getCurrentWeatherInfo from './weatherInfo';

/* This is just a function for capitalizing the description.
  This version look a little bit better than the previous one.
  The "text-transform: capitalize" in CSS seems better and easier, though,
  but I'll stick with this in case I need it in the future. */
const capitalize = (description) => {
  const returnValue = [];

  description.forEach((item) => {
    const word = (`${item}`);
    const firstLetter = word.charAt(0).toUpperCase();
    const remainingLetters = word.slice(1);
    returnValue.push(`${firstLetter}${remainingLetters}`);
  });

  return returnValue.join(' ');
};

const processInfo = async (location) => {
  const info = await getCurrentWeatherInfo(location);
  info.description = capitalize(info.description.split(' '));

  console.log(info);

  document.querySelector('#location').placeholder = 'Enter City';
};

export default processInfo;
