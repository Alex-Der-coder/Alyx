import React, { useEffect, useState } from 'react';
import axios from 'axios';


const WeatherTable = () => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await axios.get('https://weather.com/fr-FR/temps/aujour/l/50.42,3.00?par=google');
        const parser = new DOMParser();
        const htmlDocument = parser.parseFromString(response.data, 'text/html');

        const container = htmlDocument.querySelector('#WxuCurrentConditions-main-b3094163-ef75-4558-8d9a-e35e6b9b1034');

        const temperature = container.querySelector('.CurrentConditions--tempValue--MHmYY').textContent;
        const conditions = htmlDocument.querySelector('[data-testid="wxPhrase"].CurrentConditions--phraseValue--mZC_p').textContent;
        const locationElement = htmlDocument.querySelector('.CurrentConditions--location--1YWj_');
        const locationText = locationElement.textContent;

        const timestampElement = htmlDocument.querySelector('.CurrentConditions--timestamp--1ybTk');
        const timestampText = timestampElement.textContent;

        const [heure, fuseau] = timestampText.split('À partir de ')[1].split(' ', 2);

        const humidityElement = htmlDocument.querySelector('[data-testid="wxData"].WeatherDetailsListItem--wxData--kK35q span[data-testid="PercentageValue"]');
        const humidityValue = humidityElement.textContent;

        const data = [
          [locationText],
          [temperature],
          [conditions],
          [heure + ' ' + fuseau],
          [ humidityValue],
        ];

        setWeatherData(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="card_weather">
      <div className="container">
        <div className="cloud front">
          <span className="left-front"></span>
          <span className="right-front"></span>
        </div>
        <span className="sun sunshine"></span>
        <span className="sun"></span>
        <div className="cloud back">
          <span className="left-back"></span>
          <span className="right-back"></span>
        </div>
      </div>

      <div className="card-header">
        <span>{weatherData[0]}</span>
        <span>{weatherData[3]}</span>
        <span className="temp-scale"> <span>{weatherData[1]}Celsius</span></span>
        <span className="temp-scale"> <span>Humidité {weatherData[4]}</span></span>
      </div>
      <span className="temp">{weatherData[2]}</span>
    </div>
  );
};

export default WeatherTable;
