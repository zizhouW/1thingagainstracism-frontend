import React from 'react';
import ActionCard from '../../components/action-card/ActionCard';
import MButton from '../../components/m-button/MButton';
import Popup from '../../components/pop-up/Popup';
import Newsletter from '../../components/newsletter/Newsletter';
import ShareAction from '../../components/share-action/ShareAction';
import HomePng from './home.png';
import WhatCan from './what-can-i-help-with.svg';
import WhatPeople from './what-people-have-done.svg';
import WhyShould from './why-should-i-act.svg';
import './Home.scss';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <div className="home__banner">
        <div className="home__banner__title">#1 THING</div>
        <div className="home__banner__title2"><span className="title2-color">I CAN DO TO </span>FIGHT RACISM</div>
        <div className="home__banner__subtitle">A platform for all communities to act, share<br/>and get inspired towards fighting racism</div>
        <div className="share-action-popup">
          <Popup
            trigger={<MButton variant="contained" color="primary">Share 1 thing you did</MButton>}
          >
            <ShareAction />
          </Popup>
          
        </div>
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
        <Link className="questions__link" to="/why-act"><img src={WhyShould} alt="Why should I act" /></Link>
      </div>

      <Newsletter handleNewsletterSignup={() => alert('sign up')}/>
    </div>
  );
}

export default Home;
