import React from 'react';
import CardAboutMee from './CardAboutMee';
import { SpeedInsights } from "@vercel/speed-insights/react"
import Calendar from "../components/CalendarDemo"




const WhoIAm = () => {

  return (
    <section className="h-[28rem] pt-[7rem] max-[640px]:grid   max-[640px]:justify-center  max-[640px]:h-auto  max-[640px]:w-[23%]" id="whoIAmSection">
      <div className="flex flex-row justify-around max-[640px]:flex-col   max-[640px]:h-[150%]  max-[640px]:items-center ">
      <SpeedInsights/>
      <CardAboutMee />
      <Calendar />
      </div>
    </section>
  );
};

export default WhoIAm;
