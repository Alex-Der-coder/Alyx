import React, { useRef, useEffect, useState } from 'react';
const config = require('../datas/config.json');

const cloudinaryCloudName = config.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const cloudinaryFolder = config.MEDIA_FOLDER;


const Mediaplayer = () => {
  const videoRef = useRef(null);
  const [mediaList, setMediaList] = useState([]);

  useEffect(() => {
    const fetchMediaList = async () => {
      try {
        // Remplacez 'VOTRE_CLE_API_CLOUDINARY' par votre véritable clé API Cloudinary
        const cloudinaryKey =config.CLOUDINARY_API_KEY
  
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${cloudinaryCloudName}/resources/video/${cloudinaryFolder}/format/mp4,mp3`,
          {
            headers: {
              Authorization: `Bearer ${cloudinaryKey}`,
            },
          }
        );
  
        if (response.ok) {
          const data = await response.json();
          setMediaList(data.resources);
        } else {
          console.error('Failed to fetch media list from Cloudinary');
        }
      } catch (error) {
        console.error('Error fetching media list from Cloudinary:', error);
      }
    };
  
    fetchMediaList();
  }, []);

  const generateVideoUrl = (public_id, format) => {
    return `https://res.cloudinary.com/${cloudinaryCloudName}/video/upload/${public_id}.${format}`;
  };

  useEffect(() => {
    if (videoRef.current && mediaList.length > 0) {
      const firstVideo = mediaList[0];
      videoRef.current.src = generateVideoUrl(firstVideo.public_id, firstVideo.format);
      videoRef.current.type = 'video/mp4';
      videoRef.current.autoplay = true;
      videoRef.current.loop = true;
      videoRef.current.controls = false;
    }
  }, [mediaList]);

  return (
    <div className='Container_video'>
      <video ref={videoRef}>
        {mediaList.map((media, index) => (
          <source key={index} src={generateVideoUrl(media.public_id, media.format)} type={`video/${media.format}`} />
        ))}
        Votre navigateur ne prend pas en charge la balise vidéo.
      </video>
    </div>
  );
};

export default Mediaplayer;
