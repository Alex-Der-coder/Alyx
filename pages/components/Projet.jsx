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

    <div className="project  shadow-[-4px_1px_12px_10px_rgba(0,0,0,0.35)] flex flex-col justify-between my-[10px] mx-[40px] border-solid border-2 border-white rounded-[10px] max-w-[23rem] w-[28%] h-[23rem] duration-300 hover:scale-[1.1]" key={proj && proj.id}>
      <div className="card-inner" style={isFlipped ? { transform: 'rotateY(180deg)' } : {}}>
        <div className="card-front rotate-0 " style={{WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden'}} >
            {proj && (
        <h2 data-testid="Titleprojet" className="projectTitle items-center rounded-t-lg p-[4px]">
           {proj.name}
            <FontAwesomeIcon  onClick={toggleQRCode} icon={faQrcode} className="fa-fade" />
          </h2>
          )}
            {proj && (
          <a href={proj.link} className="projectGitLink">
            <div className="flex m-[15px] justify-center">
              {showQRCode ? (
                <QRCode size={250} value={proj.link} />
              ) : (
                <img
                  src={`${proj.cover}`}
                  alt={`${proj.name} - ${proj.description}`}
                  className="w-[85%] h-[215px]"
                  loading="lazy"
                  fetchpriority="low"
                />
              )}
            </div>
          </a>
            )}
             {proj && (
          <p className="projectDescription p-[2px] text-[14px] text-center h-[50px] ">{proj.description}</p>
          )}
          
          <div className="projectTechno" style={{ display: showQRCode  ? 'none' : 'flex' }}>
          {proj && proj.techno && proj.techno.map((tech, index) => (
            <img
              key={index}
              src={tech}
              className="technos"
              loading="lazy"
              fetchpriority="low"
              alt={`Technologie used in this project: ${tech
                .split('/')
                .pop()
                .split('.')[0]}`}
            />
          ))}
           <button data-testid="readmore" className="button_flip" onClick={handleButtonClick}>
           <p>Read More</p><span aria-hidden="true">
        →
      </span></button>
        </div>
        </div>
        {proj && (
        <div className="card-back" style={{WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden'}} >
          <h2 >Contexte :</h2>
          <p>{proj.contexte}</p>
          <p>Voir le repos Git <a href={proj.repos} aria-label="Lien du projet présenter"><FontAwesomeIcon icon={faCodeFork} fade style={{color: "#1e3050",}} /></a></p>
          <button className="button_flip" onClick={handleButtonClick}>
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