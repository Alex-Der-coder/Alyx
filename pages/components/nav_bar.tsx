import React  from 'react';
import  Link from 'next/link';



export default function  Navbar() {
  return (
    <nav className='fixed bg-black text-white flex items-center top-0 left-0 z-[100] justify-between w-[100%] h-[65px] ps-[2%]'>
      <div>
        <h1 className='no-margin'>Alexandre De Roeck</h1>
        <p className='no-margin'>Software Engineer</p>
        </div>
    <ul className='m-0 p-0 list-none pr-[40%]' id="menu">
      <li className='w-[150px] h-[40px] cursor-pointer text-center bg-black leading-10 float-left'>
        <Link className='list-none text-white no-underline' href="/Home">Accueil</Link>
        <ul className='m-0 p-0 list-none pr-[40%]'>
          <li className='w-[150px] h-[40px] cursor-pointer text-center bg-black leading-10 float-left'>
               <Link className='list-none text-white no-underline' href="/skills"><p>Photo</p></Link>
               </li>
          <li className='w-[150px] h-[40px] cursor-pointer text-center bg-black leading-10 float-left'>
            <a className='list-none text-white no-underline' href="#">Vidéo</a>
          </li>
          <li className='w-[150px] h-[40px] cursor-pointer text-center bg-black leading-10 float-left' ><a href="#">Design</a></li>
        </ul>
      </li>
      <li className='w-[150px] h-[40px] cursor-pointer text-center bg-black leading-10 float-left' >Présentation
        <ul className='m-0 p-0 list-none pr-[40%]'>
          <li className='w-[150px] h-[40px] cursor-pointer text-center bg-black leading-10 float-left'>
            <a  className='list-none text-white no-underline' href="https://github.com/Alex-Der-coder">Git</a>
            </li>
          <li className='w-[150px] h-[40px] cursor-pointer text-center bg-black leading-10 float-left' >
            <a className='list-none text-white no-underline' href="#">Vidéo</a>
            </li>
          <li className='w-[150px] h-[40px] cursor-pointer text-center bg-black leading-10 float-left'>
            <a className='list-none text-white no-underline' href="#">Design</a>
            </li>
        </ul>
      </li>
      <li className='w-[150px] h-[40px] cursor-pointer text-center bg-black leading-10 float-left'>
        <a className='list-none text-white no-underline' href="https://image-gallery-starter-8oupxb12p-alex-der-coders-projects.vercel.app/" aria-label="Lien vers une application de gallery photo">Gallery Photo</a>
        </li>
    </ul>
    <label className="switch" aria-label="put the light Off or Not" >
      <input type="checkbox" />
      <span className="slider"></span>
    </label>
  </nav>
  

  
  );
};
