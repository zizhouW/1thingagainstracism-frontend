import React from 'react';
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
} from "react-share";
import LogoSvg from './logo.svg';
import FbSvg from './fb.svg';
import MailSvg from './mail.svg';
import TwitterSvg from './twitter.svg';
import './Footer.scss';

function Footer({ link }) {
  return (
    <div className="footer">
      <img className="footer__logo" src={LogoSvg} alt="1 thing I can do to fight racism" />
      <div className="footer__title">Share & Fight Together</div>
      <div className="footer__share">
        <TwitterShareButton url={link}>
          <img src={TwitterSvg} alt="Twitter" />
        </TwitterShareButton>
        <EmailShareButton url={link}>
          <img src={MailSvg} alt="Email" />
        </EmailShareButton>
        <FacebookShareButton url={link}>
          <img src={FbSvg} alt="Facebook" />
        </FacebookShareButton>
      </div>
      <div className="footer__copyright">
        Copyright ©2021 1 Thing I Can Do To Fight Racism
      </div>
    </div>
  );
}

export default Footer;
