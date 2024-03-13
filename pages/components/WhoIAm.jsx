import React from 'react';
import CardAboutMee from './CardAboutMee';
import { SpeedInsights } from "@vercel/speed-insights/react"
import Calendar from "../components/CalendarDemo"

const WhoIAm = () => {

  return (
    <section className="h-[28rem] pt-[7rem]" id="whoIAmSection">
      <div className="flex flex-row justify-around ">
      <SpeedInsights/>
      <CardAboutMee />
      <Calendar />
      </div>
    </section>
  );
};

export default WhoIAm;
