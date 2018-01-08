import React from "react";

const VideoListItem = ({ video, onVideoSelect }) => {
  console.log(video);
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <ul className="list-group">
      <li onClick={() => onVideoSelect(video)} className="list-group-item">
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" src={imageUrl} />
          </div>

          <div className="media-body">
            <div className="media-heading">{video.snippet.title}</div>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default VideoListItem;
