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
      <div className="subheading">Explore what others have done, share your actions, and inspire others</div>
      {/* <div className="subheading">We‘re here to help.</div>
      <div className="subheading">Our mission is to ......</div> */}

      <div className="share-action-popup">
        <Popup
          trigger={<MButton variant="contained" color="primary">Share 1 thing you did</MButton>}
        >
          yo
        </Popup>
        
      </div>
      
      <div className="action-card-list">
        <ActionCard
          title="Support the immediate needs of AAPI groups"
          description="“It’s listening to the immediately impacted folks — the communities on the ground — and honoring what they’re asking for...”"
          handleSupport={() => alert('Thank you for your support!')}
        />
        <ActionCard
          title="Report the hate crime or incident"
          description="Hate crimes are underreported. Reporting an incident can help bring greater awareness and the chance a perpetrator will be prosecuted."
          handleSupport={() => alert('Thank you for your support!')}
        />
        <ActionCard
          title="Donate to support Anti-Asian crime victims"
          description="Go to https://www.gofundme.com/c/act/stop-aapi-hate to support Anti-Asian crime victims."
          handleSupport={() => alert('Thank you for your support!o')}
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
