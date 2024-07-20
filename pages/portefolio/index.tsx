
import React from "react";
import WhoIAm from "../components/WhoIAm"
import Techno from "../components/Techno"
import AccordionDemo  from "../components/AccordionDemo";



export default  function Portefolio ({ data , datarepo}: any ) {
  

  return (
    <>
      <WhoIAm />

        <Techno data={data} />
      <AccordionDemo />
    </>
  );

  
}

export async function getStaticProps() {
  try {
    const res = await fetch('https://portefoliov3-beta.vercel.app/api/projet');
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await res.json();
    return {
      props: { data },
      revalidate: 3600, // Revalidate data every 3600 seconds (1 hour)
    };
  } catch (error) {
    let errorMessage = 'An unknown error occurred';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return {
      props: { error: errorMessage },
    };
  }
}

