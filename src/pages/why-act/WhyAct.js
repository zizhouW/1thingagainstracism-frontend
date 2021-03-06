import React from 'react';
import Newsletter from '../../components/newsletter/Newsletter';
import TestimonialCard from '../../components/testimonial-card/TestimonialCard';
import VictimStory from '../../components/victim-story/VictimStory';
import CrimePng from './crime.png';
import VS1Png from './vs1.png';
import VS2Png from './vs2.png';
import './WhyAct.scss';

function WhyAct() {
  const openCrimeTracker = () => {
    window.open('https://hatecrimetracker.1-thing.org/');
  };
  return (
    <div className="why-act">
      <h2 className="why-act__title">Why should I act?</h2>
      <div className="why-act__subtitle">
        Racism is a deadly virus and silence is not an option. See what is happening in the society now and take action.
      </div>
      <img className="why-act__crime-tracker" src={CrimePng} alt="crime-tracker" onClick={openCrimeTracker} />
      <h2 className="why-act__title">Victim stories</h2>
      <VictimStory
        title="75-year old Asian Woman Will Go to Fight Racism"
        description="After a Chinese grandmother was attacked by a white man in broad daylight in San Francisco last week, she fought back."
        link="https://www.washingtonpost.com/nation/2021/03/19/san-francisco-asian-attack-arrest/"
        image={VS1Png}
      />
      <VictimStory
        title="75-year old Asian Woman Will Go to Fight Racism"
        description="After a Chinese grandmother was attacked by a white man in broad daylight in San Francisco last week, she fought back."
        link="https://www.washingtonpost.com/nation/2021/03/19/san-francisco-asian-attack-arrest/"
        image={VS2Png}
      />
      <h2 className="why-act__title">Testimonials</h2>
      <div className="testimonial-list">
        <TestimonialCard
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod tempor incididunt ut quis nostrud exercitation"
          name="Xue Pan" 
          title="UX Designer"
        />
        <TestimonialCard
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod tempor incididunt ut quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod tempor incididunt ut quis nostrud exercitation"
          name="Changming Tian"
          title="College Student"
        />
      </div>
      <Newsletter handleNewsletterSignup={() => alert('Thank you for signing up')}/>
    </div>
  );
}

export default WhyAct;