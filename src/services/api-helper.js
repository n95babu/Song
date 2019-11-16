import axios from 'axios';


export const randomSongs = async (song) => {
  const response = await axios.get(`https://itunes.apple.com/search?term=${song}&limit=3.`);
  const data = response.data.results;
  return data;
}