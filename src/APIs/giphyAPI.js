import axios from "axios";

const giphyApi = target => {
  const search = target;
  const key = "b6giUqrGBEpNKW0pPGc2CMCCRQd28Cyv";
  const limit = 50;

  const url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key}&limit=${limit}`;

  return axios.get(url);
};

export default giphyApi;
