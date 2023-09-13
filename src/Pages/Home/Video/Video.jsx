import React from "react";

import './Video.css';

export const VideoComponent = () => {
  return (
    <div className="videoContainer">
      <iframe
        width="853"
        height="480"
        src={`https://youtu.be/zJ5Sde7ayP4?si=t3h6QZfkaUmHQiRm`}
        bor
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};
