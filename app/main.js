import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'cerebral-router';
import controller from './controller';
import {Container} from 'cerebral-react';

import homeSignals from './modules/Home/signals';
import Home from './modules/Home';

const redirectToDefaultColor = ({services}) => {
  services.router.redirect('/blue');
}

controller.signal('rootRouted', [redirectToDefaultColor]);
homeSignals(controller);

Router(controller, {
  '/': 'rootRouted',
  '/:color': 'colorChanged'
}, {
  onlyHash: true,
  mapper: {
    query: true
  }
});

ReactDOM.render(<Container controller={controller}><Home /></Container>, document.getElementById('root'));
