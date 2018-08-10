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


import MdRender from "./components/MdRender.jsx";
import Header from "./components/Header.jsx";
import Content from "./components/Content.jsx";

const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);

const mainPage = () => <App mainChapter="home">
  <MdRender chapter="home" />
</App>;

const documentsPage = ({ match: { params: { chapter = 'documentation' }}})  => {
    return <App mainChapter={chapter}>
      <MdRender chapter={chapter.toLowerCase()} />
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
            <Route exact path='/' component={mainPage}/>
            <Route path='/Documentation/:chapter' component={documentsPage}/>
            <Route path='/Documentation' component={documentsPage}/>
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