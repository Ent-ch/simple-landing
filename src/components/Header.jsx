import React from 'react';
import { NavHashLink as NavLink, HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import ReactCountryFlag from 'react-country-flag';
import { getText as getTextMain } from '../constant.js';

const Header = ({lang = 'ua', handleLang}) => {
  const getText = text => getTextMain(lang, text);

  return <header className="mui-appbar mui--z1" id="top">
    <div className="mui-container">
      <table>
        <tbody>
        <tr className="mui--appbar-height">
          <td style={{width: '40px'}}><img src="img/logo.png" style={{height: '35px'}} /></td>
          <td className="mui--text-title"><a href="#" smooth>Brand.io</a></td>
          <td className="mui--text-right">
            <ul className="mui-list--inline mui--text-body2">
              <li><Link to="/#footer" smooth>{getText('Footer')}</Link></li>
              <li><a href="#">{getText('Pricing')}</a></li>
              <li><a href="#"><FontAwesomeIcon icon={faUser} /> {getText('Login')} </a></li>
              <li><a onClick={() => handleLang('ua')}><ReactCountryFlag code="UA" svg /></a></li>
              <li><a onClick={() => handleLang('us')}><ReactCountryFlag code="US" svg /></a></li>
            </ul>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
</header>
};

export default Header;
