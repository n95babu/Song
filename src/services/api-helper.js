import axios from 'axios';

const BaseURL = ``;

export const randomSongs = async (song) => {
  const response = await axios.get(BaseURL);
  const data = response.data;
  return data;
}