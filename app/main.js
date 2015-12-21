import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'cerebral-router';
import controller from './controller';
import {Container} from 'cerebral-react';

import Home from './modules/Home';
import homeSignals from './modules/Home/signals';

controller.signal('homeRouted', [Router.redirect('/red')]);

homeSignals(controller);

Router(controller, {
  '/': 'homeRouted',
  '/:color': 'colorChanged'
}, {
  onlyHash: true
});

ReactDOM.render(<Container controller={controller}><Home /></Container>, document.getElementById('root'));
