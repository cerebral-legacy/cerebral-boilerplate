import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'cerebral-router';
import Controller from 'cerebral';
import Model from 'cerebral-model-baobab';
import {Container} from 'cerebral-view-react';
import Example from './modules/Example';
import ColorChanger from './modules/Example/components/ColorChanger';

const controller = Controller(Model({}));

controller.modules({
  example: Example()
});

Router(controller, {
  '/': 'example.rootRouted',
  '/:color': 'example.colorChanged'
}, {
  onlyHash: true,
  mapper: {
    query: true
  }
});

ReactDOM.render(<Container controller={controller}><ColorChanger /></Container>, document.getElementById('root'));
