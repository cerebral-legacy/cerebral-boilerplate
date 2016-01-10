import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'cerebral-module-router';
import Controller from 'cerebral';
import Model from 'cerebral-model-baobab';
import {Container} from 'cerebral-view-react';
import Example from './modules/Example';
import ColorChanger from './modules/Example/components/ColorChanger';

const controller = Controller(Model({}));

controller.modules({
  example: Example(),

  router: Router({
    '/': 'example.rootRouted',
    '/:color': 'example.colorChanged'
  }, {
    onlyHash: true
  })
});

ReactDOM.render(<Container controller={controller}><ColorChanger /></Container>, document.getElementById('root'));
