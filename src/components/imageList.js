import React from "react";

const ImageList = ({ urlList }) => {
  const list = urlList.map(url => {
    return (
      <li>
        <img src={url} alt="" />
      </li>
    );
  });
  return <ul>{list}</ul>;
};

export default ImageList;
