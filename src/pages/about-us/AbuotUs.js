import React from 'react';
import MissionPng from './mission.png';
import './AboutUs.scss';

function AboutUs() {
  return (
    <div className="about">
      <h2 className="about__title">About us</h2>
      <div className="about__subtitle">
        One Thing I did to Fight Racism is a platform for people to share what they have done to fight racism,
        get inspired by others’ actions and together make an impact for a better future.</div>
      <div className="about__banner" />
      <h2 className="about__title">Our mission</h2>
      <div className="about__subtitle">
        Our mission is to encourage people to take attainable actions against racism,
        share stories and inspire more to join the movement, so we can make a bigger impact together.
      </div>
      <div className="about__subtitle">
        We wish to establish a positive loop for people to take action, sharetheir actions and inspire to break silence.
        Because individually, we are one drop; Together, we are an ocean. 
      </div>
      <div className="about__mission-image">
        <img src={MissionPng} alt="mission" />
      </div>
    </div>
  );
}

export default AboutUs;
