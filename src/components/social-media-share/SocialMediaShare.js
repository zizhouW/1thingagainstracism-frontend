import React from 'react';
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  EmailIcon,
  FacebookIcon,
  TwitterIcon,
} from "react-share";
import './SocialMediaShare.scss';

function SocialMediaShare({ link }) {
  const iconProps = {
    size: 40,
    bgStyle: { fill: 'white' },
    iconFillColor: "black",
  }
  return (
    <div className="social-media-share">
      <div className="social-media-share__title">Share & Fight Together</div>
      <TwitterShareButton url={link}>
        <TwitterIcon {...iconProps} />
      </TwitterShareButton>
      <EmailShareButton url={link}>
        <EmailIcon {...iconProps} />
      </EmailShareButton>
      <FacebookShareButton url={link}>
        <FacebookIcon {...iconProps} />
      </FacebookShareButton>
    </div>
  );
}

export default SocialMediaShare;
