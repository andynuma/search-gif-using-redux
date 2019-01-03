import giphyApi from "../APIs/giphyAPI";

const receiveData = data => {
  return {
    type: "RECEIVE_DATA",
    payload: data
  };
};

const getUrls = word => {
  return dispatch => {
    giphyApi(word).then(res => {
      const data = res.data.data;
      const imageUrlList = data.map(item => item.images.downsized.url);
      dispatch(receiveData(imageUrlList));
    });
  };
};

export default getUrls;
