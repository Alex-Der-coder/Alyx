// Home.js
import React , { useState,useEffect} from "react";

import Footer from "../components/Footer";
import Navbar from "../components/nav_bar";
import WhoIAm from "../components/WhoIAm"
import Techno from "../components/Techno"

export default function Portefolio() {

  const [data, setData] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://localhost:3000/api/projet');
        
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
      <Navbar />
      <WhoIAm />
      <Techno data={data} />
      <Footer />

    </>
  );
}
