import React from "react";

import './Video.css';

export const VideoComponent = () => {
  return (
    <div className="videoContainer">
      <iframe
        width="1080"
        height="608"
        src={`https://www.youtube.com/embed/zJ5Sde7ayP4?si=t3h6QZfkaUmHQiRm`}
        bor
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};
