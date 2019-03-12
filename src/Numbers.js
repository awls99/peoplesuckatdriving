import React, { useState,useEffect } from 'react';

function Numbers()  {
  const [deaths, setDeaths] = useState(0);
  const [injured, setInjured] = useState(0);

  useEffect(() => {
      const interval = setInterval(() => {
        let now = parseInt(Date.now() / 1000 );
        let elapsed = now - startTime;
        let newDeaths = Math.round( deathsPerSecond * elapsed );
        setDeaths(newDeaths);
        let newInjured = Math.round(injuredOrDisabledPerSecond * elapsed )
        setInjured(newInjured);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }, []);

  const deathsPerYear = 1350000; // 1 per 24 secs as of 2018
  const deathsPerSecond = deathsPerYear/365/24/60/60;
  const injuredOrDisabledPerYear = 35000000; //20-50M per year, so rounding a bit
  const injuredOrDisabledPerSecond = injuredOrDisabledPerYear/365/24/60/60*24;
  const startTime = parseInt(Date.now() / 1000 )

  return (
    <div id="numbers" style={{"textAlign":"center"}}>
      <h1>Since you've opened this page {deaths} people have died!</h1>
      <h2>Also, {injured} people have been injured or straight up became disabled...</h2>
      <h3>Car accidents are the number 1 cause of death among children and young adults.</h3>
      <p>But yeah... let's keep arguing about who will pay for insurance on self driving cars...</p>
      <cite>WHO <a href="https://www.who.int/violence_injury_prevention/road_safety_status/2018/infographicEN.pdf?ua=1">Infographic for 2018</a></cite>
      <br></br><cite>ASIRT <a href="https://www.asirt.org/safe-travel/road-safety-facts/">Data for 2018</a></cite>

    </div>
  );

}

export default Numbers;
