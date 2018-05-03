import React from 'react'
import { Glyphicon, Tab, Tabs } from "react-bootstrap";

import './WelcomeScreenView.css'
import RegistrationForm from "../RegistrationForm";
import LogIn from "../LogIn";
import NavBar from "../NavBar";
import LogoText from "../LogoText";


const WelcomeScreenView = () => {
  return (
    <div>
      <NavBar/>
      <div className={'container welcome-screen'}>
        <div className={'welcome-screen__text'}>
          <LogoText/>
          <div>
            <h2>Ponad 2.000.000 produktów w najniższych cenach!</h2>
            <p>Dzięki naszej bogatej bazie produktów znajdziesz to czego szukasz i zdecydujesz, który ze sprzedawców
              proponuje dopasowaną do Ciebie ofertę.</p>
          </div>
        </div>
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
      </div>
    </div>
  )
};

export default WelcomeScreenView