// components/VideoPlayer.tsx

import React from 'react';


type VideoPlayerProps = {
  videoSource: string;
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoSource }) => {
  return (
    <div className='Container_video'>
      <video controls={false} loop={true} autoPlay={true}>
        <source src="https://res.cloudinary.com/df1z0o9nt/video/upload/s--WX9Wtv3P--/ac_none,eo_8,q_39/v1708353080/Video/computer.webm" type="video/mp4" />
        Votre navigateur ne prend pas en charge la balise vidéo.
      </video>
    </div>
  );
};

export default VideoPlayer;
