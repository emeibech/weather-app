import './styles.css';
import processInfo from './modules/processInfo';
import { getClientLocation } from './modules/clientLocation';

document.addEventListener('DOMContentLoaded', async () => {
  const location = await getClientLocation();
  processInfo(location);
});

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  const input = document.querySelector('#location');
  const location = input.value;
  processInfo(location);
  input.value = '';
  input.placeholder = 'Searching...';
});
