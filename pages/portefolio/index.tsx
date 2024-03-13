
import React , { useState,useEffect} from "react";
import {NavigationMenuDemo } from '../components/NavigationMenuDemo'
import Footer from "../components/Footer";
import WhoIAm from "../components/WhoIAm"
import Techno from "../components/Techno"
import { AccordionDemo } from "../components/AccordionDemo";
export default function Portefolio() {

  const [data, setData] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://portefoliov3-beta.vercel.app/api/projet');
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
      }
    };

    fetchData();
  }, []); 

 

  return (
    <>
      <NavigationMenuDemo  />
      <WhoIAm />
      <Techno data={data} />
      <AccordionDemo />
      <Footer />

    </>
  );
}
