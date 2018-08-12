import React from 'react';
import { NavHashLink as NavLink, HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUniversity } from '@fortawesome/free-solid-svg-icons';
import ReactCountryFlag from 'react-country-flag';

const Header = () => <header className="mui-appbar mui--z1" id="top">
    <div className="mui-container">
      <table>
        <tbody>
        <tr className="mui--appbar-height">
          <td style={{width: '40px'}}><img src="img/logo.png" style={{height: '35px'}} /></td>
          <td className="mui--text-title"><a href="#" smooth>Brand.io</a></td>
          <td className="mui--text-right">
            <ul className="mui-list--inline mui--text-body2">
              <li><Link to="/#footer" smooth>Footer</Link></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#"><FontAwesomeIcon icon={faUser} /> Login <ReactCountryFlag code="UA" svg /></a></li>
            </ul>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
</header>;

export default Header;
