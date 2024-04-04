import React, { useState }  from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar , faMobile , faBriefcase , faEnvelope , faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faSteam , faSkype  } from '@fortawesome/free-brands-svg-icons';


const CardAboutMee = () => {

  const [isFlipped, setIsFlipped] = useState(false);

  const handleButtonClick = () => {
    setIsFlipped(!isFlipped);
  };
 
    return (
      <div className=" bg-transparent w-[13rem] h-[254px] font-sans ">
        <div className=" text-center" style={isFlipped ? { transform: 'rotateY(180deg)', transformStyle: 'preserve-3d' , transition: 'transform .6s'  } : { transformStyle: 'preserve-3d', transition: 'transform .6s'  }}>
            <div className="shadow-[-4px_1px_12px_10px_rgba(0,0,0,0.35)] bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] via-50% to-[#fcb045] rounded-2xl absolute flex flex-col justify-center w-[100%] h-[22rem] text-white border-2 border-[#fb7f51] ">
              <div className="overflow-hidden object-cover w-[5rem] h-[5rem] border-solid border-2 border-black rounded-[50%] flex justify-center items-center m-auto ">
                <img src="https://res.cloudinary.com/df1z0o9nt/image/upload/s--hqU-nLwC--/c_fill,h_120,w_120/f_auto/q_auto/r_max/Projet_Openclassroom/Alexandre_De-Roeck.jpg" alt='head of Alexandre De Roeck'/>
              </div >
              <p className="mt-[20px] font-semibold text-[18px]"> Alexandre De Roeck
                <span className="block font-extralight text-[16px]">Concepteur d'application Javascript / React </span>
              </p>
              <div className="before:block before:w-[100%] before:h-[2px] before:mt-[20px] before:mb-[20px] before:bg-black">
            <div className='flex bg-white p-[15px] gap-[15px]'>
              <a href="https://www.youtube.com/playlist?list=PLmYoTKoOD35DIX5UZ2ZAGo7KiY1Xwq-t6" className='socialContainer containerTwo' aria-label="écouter ma playlist">
              <svg className="fill-current w-[1.1rem]" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
          <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"></path>
          </svg>
              </a>
              <a href="https://call.whatsapp.com/video/7m6HwRmjSAYesrJvj9Oi2o?fbclid=IwAR2VHEpIw1WZCLRYJUx03MnExoJOHhMI97KUhX7dpBXekkIPmG44NBmQAFw"  className='socialContainer containerFour' aria-label="utiliser l'application pour me parler">
          <svg className="fill-current w-[1.1rem]" viewBox="0 0 16 16"> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path> </svg>
          </a>
              <a href="https://www.facebook.com/alexandre59110" className='socialContainer containerThree' aria-label="Mon profil social Facebook">
                  <svg  className="fill-current w-[1.1rem]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                  </svg>
              </a>
              <a href="https://www.linkedin.com/in/alexandre-de-roeck-%F0%9F%9A%80-660217135/" className='socialContainer containerThree' aria-label="mon profil professionel">
                  <svg className="fill-current w-[1.1rem]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                  </svg>
              </a>
          </div>
          </div>
          <div className="flex justify-end h-[3rem] mr-[1rem] mt-[0.8rem]">
           <button className="button_flip  hover:bg-[#fff] hover:text-[#148672]" onClick={handleButtonClick}>
           <p>Read More</p><span aria-hidden="true">
        →
      </span></button>
          </div>
          </div>
          <div style={{ transform: 'rotateY(180deg)'  , backfaceVisibility: 'hidden'  }} className=" text-white border-2 border-[#fb7f51] rounded-2xl bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] via-50% to-[#fcb045] absolute w-[100%] h-[22rem] flex flex-col items-center justify-center ">
            <div className="absolute top-[3%]">
              <p className="text-[1.5em] font-black text-center ">À propos de moi </p>
              <div className="flex flex-col justify-between">
              <p className="m-[10px]"><FontAwesomeIcon icon={faArrowRight}  fade />&nbsp;Mobile&nbsp;<a className="text-white" href="tel:0744443257" aria-label="Appeler le numéro de téléphone"><FontAwesomeIcon icon={faMobile} /></a></p>
              <p className="m-[10px]"><FontAwesomeIcon icon={faArrowRight} fade />&nbsp;Mon adresse Mail&nbsp;<a className="text-white" href="mailto:Mr.Alexandre.Deroeck@gmail.com" aria-label="Me joindre par mail"><FontAwesomeIcon icon={faEnvelope} /></a></p>
              <p className="m-[10px]"><FontAwesomeIcon icon={faArrowRight} fade />&nbsp;Skype&nbsp;<a className="text-white" href="Skype://openurl/https://join.skype.com/invite/CONoldH345jt" target="_blank" rel="noreferrer" aria-label="M'Appeler via skype"><FontAwesomeIcon icon={faSkype} /></a></p>
              <p className="m-[10px]"><FontAwesomeIcon icon={faArrowRight} fade />&nbsp;Mon profil Malt&nbsp;<a className="text-white" href="https://www.malt.fr/profile/alexandrederoeck" aria-label="s'offrir mes services "><FontAwesomeIcon icon={faBriefcase} /></a></p>
              <p className="m-[10px]"><FontAwesomeIcon icon={faArrowRight} fade />&nbsp;Google Calendar&nbsp;<a className="text-white" href="https://calendly.com/mr-alexandre-deroeck/30min" aria-label="Prendre rendez-vous avec moi"><FontAwesomeIcon icon={faCalendar} /></a></p>
              <p className="m-[10px]"><FontAwesomeIcon icon={faArrowRight} fade />&nbsp;Mon profil Steam&nbsp;<a className="text-white" href="steam://openurl/https://steamcommunity.com/profiles/76561198000304766" target="_blank" rel="noreferrer" aria-label="se détendre en jouant a deux"><FontAwesomeIcon icon={faSteam} /></a></p>
            </div>
              <button className="button_flip place-button_flip  hover:bg-[#fff] hover:text-[#148672]" onClick={handleButtonClick}>
           <p>Read More</p><span aria-hidden="true">
        →
      </span></button>
      </div>
          </div>
      </div>
    </div>
    )
};
  
export const getStaticProps = async () => {
  return {
    props: {},
    revalidate: 3600 
  };
};

  export default CardAboutMee;
  

