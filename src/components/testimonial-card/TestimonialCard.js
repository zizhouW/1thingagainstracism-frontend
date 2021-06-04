import React from 'react';
import './TestimonialCard.scss';

function TestimonialCard({ content, name, title }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-card__content">{content}</div>
      <div className="testimonial-card__user">
        <div className="testimonial-card__user__name">{name},</div>
        <div className="testimonial-card__user__title">{title}</div>
      </div>
    </div>
  );
}

export default TestimonialCard;
