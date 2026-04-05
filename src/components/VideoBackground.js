import React from 'react';
import '../styles/VideoBackground.css';

const VideoBackground = () => {
  return (
    <div className="video-container">
      <img src="/assets/sl1.jpg" alt="Background" className="background-video" />
      <div className="overlay"></div>
    </div>
  );
};

export default VideoBackground;
