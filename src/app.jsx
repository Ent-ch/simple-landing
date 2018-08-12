import 'es6-shim';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Appbar from 'muicss/lib/react/appbar';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';

// import 'font-awesome/css/font-awesome.min.css';
import 'muicss/dist/css/mui.css';
import './app.css';

import { apiUrl } from './constant.js';

import MdRender from "./components/MdRender.jsx";
import Header from "./components/Header.jsx";
import Content from "./components/Content.jsx";
import About from "./components/About.jsx";

const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);

const MainPage = () => <App mainChapter="home">
  <MdRender chapter="home" />
</App>;

const AboutPage = () => <App mainChapter="About">
  <About />
</App>;

const DocumentsPage = ({ match: { params: { chapter = 'documentation' }}})  => {
    return <App mainChapter={chapter}>
      <MdRender chapter={chapter.toLowerCase()} />
    </App>;
};


class App extends React.Component {
    state = {
        searchText: '',
        cats: [],
    };

    componentWillMount() {
        fetch(`${apiUrl}/Categories`).then(data => {
            return data.json();
        }).then(cats => {
          console.log(cats);
          this.setState({
            cats,
          });
        });
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
          <Header />
          <Content>
            {childrenWithExtraProp}
          </Content>
          <footer>
            <div className="mui-container mui--text-center" id="footer">
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
            <Route exact path='/' component={MainPage}/>
            <Route path='/Documentation/:chapter' component={DocumentsPage}/>
            <Route path='/Documentation' component={DocumentsPage}/>
            <Route path='/About' component={AboutPage}/>
            <Route component={NoMatch} />
        </Switch>
    </HashRouter>,
    homeEl
);


module.exports = {
    MdRender,
    React,
    ReactDOM,
};