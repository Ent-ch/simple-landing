import React from 'react';
import { NavHashLink as NavLink, HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUniversity } from '@fortawesome/free-solid-svg-icons';
import ReactCountryFlag from 'react-country-flag';

const Content = (props) =><div id="content-wrapper" className="mui--text-center">
  <div className="mui--appbar-height"></div>
  <br />
  <br />
  <div className="mui--text-display3 row wow zoomInDown">Brand.io</div>
  <br />
  <br />
  <button className="mui-btn mui-btn--raised">Get started</button>
  <br />
  <br />
  <FontAwesomeIcon icon={faUniversity} style={{fontSize: '60px'}}/>
  {props.children}
</div>;

export default Content;