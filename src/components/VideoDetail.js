import React from "react";
import Spinner from "./Spinner";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <Spinner text={"loading"} />;
  }
  let videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} title="video player" />
      </div>
      <div style={{ margin: "20px 0" }}>
        <h4 style={{ color: "white", fontSize: "20px" }}>
          {video.snippet.title}
        </h4>
        <p style={{ color: "lightgray" }}>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;