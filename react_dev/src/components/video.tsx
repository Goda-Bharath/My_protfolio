import React from 'react';
const PortfolioVideo = () => {
  return (
    <div className="w-full bg-black shadow-lg">
      <video
        className="w-full h-[390px] object-cover"
        muted
        loop
        playsInline
        controls
      >
       <source src="videos/video3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default PortfolioVideo;


