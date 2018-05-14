import React from 'react'
import { Glyphicon, Tab, Tabs } from "react-bootstrap";

import RegistrationForm from "./RegistrationForm";
import LogIn from "./LogIn";
import './WelcomeScreen.css'


const WelcomeScreenForms = () => {
  return (
    <Tabs defaultActiveKey={1} className={'welcome-screen__forms'}
          animation={true} id="noanim-tab-example">
      <Tab eventKey={1}
           className={'forms__tab'}
           title={
             <div>
               <Glyphicon glyph="log-in"/>
               Zaloguj
             </div>
           }><LogIn/>
      </Tab>
      <Tab eventKey={2} className={'forms__tab'} title={
        <div>
          <Glyphicon glyph="user"/>
          Zarejestruj
        </div>
      }><RegistrationForm/>
      </Tab>
    </Tabs>
  )
};

export default WelcomeScreenForms