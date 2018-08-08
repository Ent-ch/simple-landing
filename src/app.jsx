import 'es6-shim';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';

import Appbar from 'muicss/lib/react/appbar';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUniversity } from '@fortawesome/free-solid-svg-icons';

// import 'font-awesome/css/font-awesome.min.css';
import 'muicss/dist/css/mui.css';
import './app.css';


import SlideDoc from "./components/mdRender.jsx";

const mainPage = () => <App mainChapter="home">
    <SlideDoc chapter="home" />
</App>;

const documentsPage = ({ match: { params: { chapter = 'documentation' }}})  => {
    return <App mainChapter={chapter}>
        <SlideDoc chapter={chapter.toLowerCase()} />
    </App>;
};


class App extends React.Component {
    state = {
        searchText: '',
    };

    componentWillMount() {
        // fetch('/Categories').then(data => {
        //     return data.json();
        // }).then(cats => {
        //     this.setState({
        //         cats,
        //     });
        // });
    }

    handleSearch = (event) => {
        const { value = '' } = event.target;

        this.setState({ searchText: value.toLowerCase() });
    }

    render() {
        const { cats, searchText = '' } = this.state;
        const { classNameName, mainChapter, onlyDecorate } = this.props;
        const childrenWithExtraProp = React.Children.map(this.props.children, child => {
            return React.cloneElement(child, {
                cats,
                searchText,
            });
        });

        if (onlyDecorate) {
            return childrenWithExtraProp;
        }

        return (
        <div>
            <header className="mui-appbar mui--z1">
                <div className="mui-container">
                  <table>
                    <tr className="mui--appbar-height">
                      <td className="mui--text-title">Brand.io</td>
                      <td className="mui--text-right">
                        <ul className="mui-list--inline mui--text-body2">
                          <li><a href="#">About</a></li>
                          <li><a href="#">Pricing</a></li>
                          <li><a href="#"><FontAwesomeIcon icon={faUser} /> Login</a></li>
                        </ul>
                      </td>
                    </tr>
                  </table>
                </div>
            </header>

            <div id="content-wrapper" className="mui--text-center">
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
                {childrenWithExtraProp}
            </div>

            <footer>
              <div className="mui-container mui--text-center">
                Made with ♥ by <a href="https://www.muicss.com">MUICSS</a>
              </div>
            </footer>
        </div>
        );
    }
}

const homeEl = document.getElementById('root_jsx');

homeEl && ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact path='/' component={mainPage}/>
            <Route path='/Documentation/:chapter' component={documentsPage}/>
            <Route path='/Documentation' component={documentsPage}/>
        </Switch>
    </HashRouter>,
    homeEl
);


module.exports = {
    SlideDoc,
    React,
    ReactDOM,
};