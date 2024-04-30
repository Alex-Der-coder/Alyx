
import React , { useState,useEffect} from "react";
import WhoIAm from "../components/WhoIAm"
import Techno from "../components/Techno"
import AccordionDemo  from "../components/AccordionDemo";


export default function Portefolio() {

  const [data, setData] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/projet');
        
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
      <WhoIAm />
        <Techno data={data} />
      <AccordionDemo />
    </>
  );
}
