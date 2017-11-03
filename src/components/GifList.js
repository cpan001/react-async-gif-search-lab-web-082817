import React from "react";

function GifList(props) {
  return (
    <div>
      {props.gifs.map(gif => (
        <li>
          <img src={gif.images.downsized_medium.url} alt="" />
        </li>
      ))}
    </div>
  );
}

export default GifList;
