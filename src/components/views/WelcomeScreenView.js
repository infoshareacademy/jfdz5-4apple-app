import React from 'react'

import './WelsomeScreenView.css'
import RegistrationForm from "../RegistrationForm";
import {Glyphicon, Tab, Tabs} from "react-bootstrap";
import LogIn from "../LogIn";

import logo from '../../img/logo.svg'


const WelcomeScreenView = () => {
  return (
    <div className={'container welcome-screen'}>
      <div className={'welcome-screen__image'}>
        <a href="#"><img src={logo} alt={'logo'} className={'welcome-screen__logo'}/></a>
        <div>
          <h1>Ponad 2 000 000 produktów w najniższych cenach!</h1>
          <p>Dzięki naszej bogatej bazie produktów znajdziesz to czego szukasz i zdecydujesz, który ze sprzedawców
            proponuje dopasowaną do Ciebie ofertę.</p>
        </div>
      </div>
      <Tabs defaultActiveKey={1} className={'welcome-screen__forms'} animation={true} id="noanim-tab-example">
        <Tab eventKey={1}
             className={'forms__tab'}
             title={
               <div>
                 <Glyphicon glyph="log-in"/>
                 Zaloguj
               </div>
             }><LogIn/></Tab>
        <Tab eventKey={2} className={'forms__tab'} title={
          <div>
            <Glyphicon glyph="user"/>
            Zarejestruj
          </div>
        }><RegistrationForm/></Tab>
      </Tabs>
    </div>
  )
};

export default WelcomeScreenView