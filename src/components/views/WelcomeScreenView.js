import React from 'react'

import NavBar from "../NavBar";
import WelcomeScreenForms from "../WelcomeScreenForms";
import WelcomeScreenInfo from "../WelcomeScreenInfo";

const WelcomeScreenView = () => {
  return (
    <div>
      <NavBar/>
      <div className={'container welcome-screen'}>
        <WelcomeScreenInfo/>
        <WelcomeScreenForms/>
      </div>
    </div>
  )
};

export default WelcomeScreenView