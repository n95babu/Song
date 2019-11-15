import axios from 'axios';

// const BaseURL = ``;

export const randomSongs = async (song) => {
  const response = await axios.get(`https://itunes.apple.com/search?term=${song}&limit=25.`);
  const data = response.data;
  console.log(data);
  return data;
}