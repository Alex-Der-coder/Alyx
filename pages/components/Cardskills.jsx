import React, { useState, useEffect } from 'react';
import skills from "../datas/skills.json";

const Cardskills = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(skills);
  }, []);

  return (
    <div className="card-container">
      {data.map((item) => (
        <div key={item.id} className="card_graduate">
          <div className="image"><img src={`${item.photo}`} alt={item.title} /></div>
          <div className="content_skills">
            <a href="#" className="title">
              <span>
                {item.title}
              </span>
            </a>

            <p className="desc">
              {item.description}
            </p>

            <a className="action" href="#">
              Find out more
              <span aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cardskills;
