import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQrcode } from '@fortawesome/free-solid-svg-icons';
import { faCodeFork } from '@fortawesome/free-solid-svg-icons';
import QRCode from 'qrcode.react';


const Project = ({ proj  }) => {
  console.log(proj);
  const [showQRCode, setShowQRCode] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleQRCode = () => {
    setShowQRCode(!showQRCode);
  };

  const handleButtonClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (

    <div  className="shadow-[-4px_1px_12px_10px_rgba(0,0,0,0.35)] flex flex-col justify-between my-[10px] mx-[40px] border-solid border-2 border-white rounded-[10px] max-w-[23rem] w-[28%] h-[23rem] duration-300 hover:scale-[1.1] max-[640px]:w-[100%] max-[640px]:mx-[10px] max-[640px]:h-[25rem] " key={proj && proj.id}>
      <div  style={isFlipped ? { transform: 'rotateY(180deg)', transformStyle: 'preserve-3d' , transition: 'transform .6s'  } : { transformStyle: 'preserve-3d', transition: 'transform .6s'  }} >
        <div className="rotate-0 absolute w-[100%] h-[100%]" style={{WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden'}} >
            {proj && (
        <h2 data-testid="Titleprojet" className="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] via-50% to-[#fcb045] items-center rounded-t-lg p-[4px] flex justify-around font-bold text-xl ">
           {proj.name}
            <FontAwesomeIcon  onClick={toggleQRCode} icon={faQrcode} className="fa-fade" />
          </h2>
          )}
            {proj && (
          <a href={proj.link} >
            <div className="flex m-[10px] justify-center">
              {showQRCode ? (
                <QRCode size={250} value={proj.link} />
              ) : (
                <img
                  src={`${proj.cover}`}
                  alt={`${proj.name} - ${proj.description}`}
                  className="w-[85%] h-[215px] "
                  loading="lazy"
                  fetchpriority="low"
                />
              )}
            </div>
          </a>
            )}
             {proj && (
          <p className="p-[2px] text-[13px] text-center h-[50px] max-[640px]:text-[12px] max-[640px]:mt-[10px] max-[640px]:mb-[10px] ">{proj.description}</p>
          )}
          
          <div className="justify-center pt-[15px] mt-[-5%] gap-[15px]   " style={{ display: showQRCode  ? 'none' : 'flex' }}>
          {proj && proj.techno && proj.techno.map((tech, index) => (
            <img
              key={index}
              src={tech}
              className="w-[25px] mx-[4px] max-[640px]:hidden "
              loading="lazy"
              fetchpriority="low"
              alt={`Technologie used in this project: ${tech
                .split('/')
                .pop()
                .split('.')[0]}`}
            />
          ))}
           <button data-testid="readmore" className="button_flip hover:bg-[#fff] hover:text-[#148672] " onClick={handleButtonClick}>
           <p>Read More</p><span aria-hidden="true">
        →
      </span></button>
        </div>
        </div>
        {proj && (
        <div className="absolute flex flex-col justify-between w-[100%] text-center h-[355px] max-[640px]:text-center  " style={{transform: 'rotateY(180deg)' , WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden'}} >
          <h2 >Contexte :</h2>
          <p>{proj.contexte}</p>
          <h2 >ID:</h2>
          <p>{proj.id}</p>
          <p>Voir le repos Git <a href={proj.repos} aria-label="Lien du projet présenter"><FontAwesomeIcon icon={faCodeFork} fade style={{color: "#1e3050",}} /></a></p>
          <button className="button_flip  hover:bg-[#fff] hover:text-[#148672] w-[33%] self-center max-[640px]:w-[45%] max-[640px]:ml-[26%]" onClick={handleButtonClick}>
           <p>Read More</p><span aria-hidden="true">
        →
      </span></button>
        </div>
        )}
        </div>
    </div>
    
  );
};

export default Project;