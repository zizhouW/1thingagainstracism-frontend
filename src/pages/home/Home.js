import React from 'react';
import ActionCard from '../../components/action-card/ActionCard';
import MButton from '../../components/m-button/MButton';
import Popup from '../../components/pop-up/Popup';
import Newsletter from '../../components/newsletter/Newsletter';
import WhatCan from './what-can-i-help-with.svg';
import WhatPeople from './what-people-have-done.svg';
import WhyShould from './why-should-i-act.svg';
import './Home.scss';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h2>Welcome to 1 Thing I Did Against Racism!</h2>
      <div className="subheading">Take actions to stop racism.</div>
      <div className="subheading">We‘re here to help.</div>
      <div className="subheading">Our mission is to ......</div>

      <div className="share-action-popup">
        <Popup
          trigger={<MButton variant="contained" color="primary">Share 1 thing you did</MButton>}
        >
          yo
        </Popup>
        
      </div>
      
      <div className="action-card-list">
        <ActionCard
          title="title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod tempor incididunt ut quis nostrud exercitationLorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod tempor incididunt ut quis nostrud exercitationLorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod tempor incididunt ut quis nostrud exercitationLorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod tempor incididunt ut quis nostrud exercitation"
          handleSupport={() => alert('yo')}
        />
        <ActionCard
          title="title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod tempor incididunt ut quis nostrud exercitation"
          handleSupport={() => alert('yo')}
        />
        <ActionCard
          title="title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod tempor incididunt ut quis nostrud exercitation"
          handleSupport={() => alert('yo')}
        />
      </div>

      <div className="questions">
        <Link className="questions__link" to="/actions"><img src={WhatPeople} alt="What people have done?" /></Link>
        <Link className="questions__link" to="/actions"><img src={WhatCan} alt="What can I help with" /></Link>
        <Link className="questions__link" to="/actions"><img src={WhyShould} alt="Why should I act" /></Link>
      </div>

      <Newsletter handleNewsletterSignup={() => alert('yo')}/>
    </div>
  );
}

export default Home;
