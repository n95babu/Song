import axios from 'axios';

// const BaseURL = ``;

export const randomSongs = async (song) => {
  const response = await axios.get(`https://itunes.apple.com/search?term=senorita&limit=3.`);
  const data = response.data.results;
  console.log(data);
  return data;
}