// @flow

// import type {State} from './types';

import './App.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Calculator from 'string-tension-calculator';

// class Main extends Component<State & {dispatch: Function}> {
class Main extends Component<any> {
  render() {
    return (
      <div>
        <Calculator>
          <Header />
        </Calculator>
        <div className="footer">
          <p>
            <span>This tension calculator uses</span>
            <span>
              specifications from{' '}
              <a href="https://www.kaliummusic.com" target="_blank" rel="noopener noreferrer">
                Kalium Strings
              </a>
            </span>
          </p>
          <a href="https://twitter.com/aarondjents" target="_blank" rel="noopener noreferrer" className="twitter-link">
            <img src="/twitter.png" alt="twitter" />
          </a>
        </div>
      </div>
    );
  }
}

class Header extends Component<any> {
  render() {
    return (
      <div className="header-logo">
        <img src="/logo_header.png" alt="logo" />
        <h1>
          <span>String Tension</span>
          <span>Calculator</span>
        </h1>
      </div>
    );
  }
}

ReactDOM.render(
  <Main />,
  // $FlowFixMe
  document.getElementById('root'),
);
registerServiceWorker();
