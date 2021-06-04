import React from 'react';
import Newsletter from '../../components/newsletter/Newsletter';
import TestimonialCard from '../../components/testimonial-card/TestimonialCard';
import VictimStory from '../../components/victim-story/VictimStory';
import CrimeSvg from './crime.svg';
import VS1Svg from './vs1.svg';
import VS2Svg from './vs2.svg';
import './WhyAct.scss';

function WhyAct() {
  const openCrimeTracker = () => {
    window.open('https://www.google.com');
  };
  return (
    <div className="why-act">
      <h2 className="why-act__title">Why should I act?</h2>
      <div className="why-act__subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod tempor incididunt ut quis nostrud exercitation
      </div>
      <img className="why-act__crime-tracker" src={CrimeSvg} alt="crime-tracker" onClick={openCrimeTracker} />
      <h2 className="why-act__title">Victim stories</h2>
      <VictimStory
        title="75-year old Asian Woman Will Go to Fight Racism"
        description="After a Chinese grandmother was attacked by a white man in broad daylight in San Francisco last week, she fought back."
        link="https://www.washingtonpost.com/nation/2021/03/19/san-francisco-asian-attack-arrest/"
        image={VS1Svg}
      />
      <VictimStory
        title="75-year old Asian Woman Will Go to Fight Racism"
        description="After a Chinese grandmother was attacked by a white man in broad daylight in San Francisco last week, she fought back."
        link="https://www.washingtonpost.com/nation/2021/03/19/san-francisco-asian-attack-arrest/"
        image={VS2Svg}
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
      <Newsletter handleNewsletterSignup={() => alert('sign up')}/>
    </div>
  );
}

export default WhyAct;