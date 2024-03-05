import React from 'react';
 import VideoPlayer from './VideoPlayer';
import CardAboutMee from './CardAboutMee';
import { SpeedInsights } from "@vercel/speed-insights/react"

const WhoIAm = () => {

  return (
    <section className="whoIAm" id="whoIAmSection">
      <div className="presentationContainer">
      <SpeedInsights/>
      <CardAboutMee />
      </div>
    </section>
  );
};

export default WhoIAm;
