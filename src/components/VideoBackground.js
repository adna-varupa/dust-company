import React from 'react';
import '../styles/VideoBackground.css';
import backgroundVideo from '../assets/dustcompany.mp4';

const VideoBackground = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted className="background-video">
      <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
    </div>
  );
};

export default VideoBackground;
