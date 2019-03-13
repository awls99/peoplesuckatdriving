import React from 'react';

function Smug() {
  const texts = [
    "But yeah... let's keep arguing about who will pay for insurance on self driving cars...",
    "But 4 people died in over 210 million driven KM's on self driven cars, it's unsafe!",
    "But the troley problem needs to be argued ad infinitum."
  ]

  return(
    <p>{texts[Math.floor(Math.random()*texts.length)]}</p>
  );

}

export default Smug;
