import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity } from '@fortawesome/free-solid-svg-icons';
import Button from 'muicss/lib/react/button';

const Content = (props) =><div id="content-wrapper" className="mui--text-center">
  <div className="mui--appbar-height"></div>
  <br />
  <br />
  <div className="mui--text-display3 row wow zoomInDown">Brand.io</div>
  <br />
  <br />
  <Button>Get started</Button>
  <br />
  <br />
  <FontAwesomeIcon icon={faUniversity} style={{fontSize: '60px'}}/>
  {props.children}
</div>;

export default Content;
