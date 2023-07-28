import React from 'react';
import facebook from '../../src/icons/icon/outlined/brand and logo/facebook.svg';
import instagram from '../../src/icons/icon/outlined/brand and logo/instagram.svg';
import twitter from '../../src/icons/icon/outlined/brand and logo/twitter.svg';
import youtube from '../../src/icons/icon/outlined/brand and logo/youtube.svg';

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="container">
            <div className="footer__wrapper">
          <div className="footer__contact">
            <ul>
              <li className='footer__link'>
                <a href="#">ГЛАВНАЯ</a>
              </li>
              <li className='footer__link'> 
                <a href="#"> СЕРВИС</a>
              </li>
              <li className='footer__link'>  
                <a href="#">О НАС</a>
              </li>
              <li className='footer__link'>
                <a href="#">КОНТАКТЫ</a>
              </li >
              <li className='footer__link'>
                <a href="#">ЛОКАЦИЯ</a>
              </li>
            </ul>
          </div>
          <div className="footer__socials">
            <h3 className='footer__follow'>Следуйте нас: </h3>
            <ul>
                <li className='footer__link'>
                    <a href="#"></a>
                    <img className='footer__icons' src={facebook} alt="facebook" />
                </li>
                <li className='footer__link'>
                    <a href="#"></a>
                    <img className='footer__icons' src={youtube} alt="youtube" />
                </li>
                <li className='footer__link'>
                    <a href="#"></a>
                    <img className='footer__icons' src={twitter} alt="twitter" />
                </li>
                <li className='footer__link'>
                    <a href="#"></a>
                    <img className='footer__icons' src={instagram} alt="instagram" />
                </li>
            </ul>
            
                

          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
