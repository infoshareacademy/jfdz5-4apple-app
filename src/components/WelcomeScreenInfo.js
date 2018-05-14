import React from 'react'

import LogoText from "./LogoText";

const WelcomeScreenInfo = () => {
  return (
    <div className={'welcome-screen__text'}>
      <LogoText/>
      <div>
        <h2>Ponad 2.000.000 produktów w najniższych cenach!</h2>
        <p>Dzięki naszej bogatej bazie produktów znajdziesz to czego szukasz i zdecydujesz, który ze sprzedawców
          proponuje dopasowaną do Ciebie ofertę.</p>
      </div>
    </div>
  )
};

export default WelcomeScreenInfo