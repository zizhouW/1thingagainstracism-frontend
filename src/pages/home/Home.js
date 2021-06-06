import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import ActionCard from '../../components/action-card/ActionCard';
import MButton from '../../components/m-button/MButton';
import Popup from '../../components/pop-up/Popup';
import Newsletter from '../../components/newsletter/Newsletter';
import ShareAction from '../../components/share-action/ShareAction';
import './Home.scss';


function Home() {
  const history = useHistory();
  const location = useLocation();
  const query = new URLSearchParams(location.search);

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
            <ShareAction submitCallback={() => history.push('/inspirations')}/>
          </Popup>
        </div>
        <Link to="./inspirations"><MButton variant="outlined" color="primary">Get Inspirations</MButton></Link>
      </div>

      <h3 className="home__section-title">Instant actions</h3>
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
          title="Speak out if you witness a hate crime or incident"
          description="“If you happen to find yourself witnessing something … either speak out or actually intervene and defend the other person,”"
          handleSupport={() => alert('Thank you for your support!')}
        />
        <ActionCard
          title="Check in with your Asian American peers"
          description="By asking Asian Americans in your life what you can do to support them during the current climate is significant."
          handleSupport={() => alert('Thank you for your support!')}
        />
        <ActionCard
          title="Reach out to your elected officials"
          description="Americans should ask politicians to work toward better ways of understanding and collecting data on hate crimes. "
          handleSupport={() => alert('Thank you for your support!')}
        />
        <ActionCard
          title="Advocate for awareness in your workplace"
          description="Use your platform to talk about this racism to understand it, so that you can think about how you want to participate in taking actions."
          handleSupport={() => alert('Thank you for your support!')}
        />
      </div>
      <Newsletter handleNewsletterSignup={() => alert('Thank you for signing up')} autoFocus={query.get('bottom') === 'true'} />
    </div>
  );
}

export default Home;
