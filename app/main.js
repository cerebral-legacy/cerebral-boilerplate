import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'cerebral-router';
import controller from './controller';
import {Container} from 'cerebral-react';

import home from './modules/Home';

const modules = controller.register({
  home
});

// get the home component
const { home: { Component: Home } } = modules;

Router(controller, {
  '/': 'home.colorChanged'
}, {
  mapper: {
    query: true
  }
});

ReactDOM.render(<Container controller={controller}><Home /></Container>, document.getElementById('root'));
