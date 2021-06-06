import React from 'react';
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
} from "react-share";
import EmailSvg from './email.svg';
import LinkSvg from './link.svg';
import './SocialMediaShare.scss';

function SocialMediaShare({ link }) {
  const iconProps = {
    size: 40,
    bgStyle: { fill: 'white' },
    iconFillColor: "#1DA1F2",
  }

  const copyUrl = () => {
    var dummy = document.createElement('input'),
    text = window.location.href;
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    alert('Copied to clipboard');
  };
  return (
    <div className="social-media-share">
      <div className="social-media-share__title">Share this project</div>
      <TwitterShareButton url={link}>
        <TwitterIcon {...iconProps} />
      </TwitterShareButton>
      <FacebookShareButton url={link}>
        <FacebookIcon {...iconProps} iconFillColor='#4267B2' />
      </FacebookShareButton>
      <EmailShareButton subject="Check out #1thing!" body={link}>
        <img src={EmailSvg} alt="link" />
      </EmailShareButton>
      <img src={LinkSvg} alt="link" onClick={copyUrl} />
    </div>
  );
}

export default SocialMediaShare;
