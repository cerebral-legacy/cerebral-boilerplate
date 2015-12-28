import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'cerebral-router';
import controller from './controller';
import {Container} from 'cerebral-react';

import Home from './modules/Home';
import HomeModule from './modules/Home/module';

import FirebaseModule from './modules/Firebase/module';
import FalcorModule from './modules/Falcor/module';
import UIModule from './modules/UI/module';

controller.signal('homeRouted', [Router.redirect('/red')]);

controller.extends({
  home: HomeModule,
  firebase: FirebaseModule({
    url: 'https://glowing-fire-4534.firebaseio.com'
  }),
  falcor: FalcorModule({
    source: '/model.json'
  }),
  UI: UIModule
});

Router(controller, {
  '/': 'homeRouted',
  '/:color': 'home.colorChanged'
}, {
  onlyHash: true
});

ReactDOM.render(<Container controller={controller}><Home /></Container>, document.getElementById('root'));
