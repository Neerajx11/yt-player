import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  console.log(video);
  return (
    <div onClick={() => onVideoSelect(video)} className="item video-item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content" style={{ alignSelf: "self-start" }}>
        <div className="header" style={{ color: "white" }}>
          {video.snippet.title}
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
