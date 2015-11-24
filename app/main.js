import React from 'react';
import ReactDOM from 'react-dom';
import controller from './controller';
import {Container} from 'cerebral-react';

import Home from './modules/Home';
import homeSignals from './modules/Home/signals';

homeSignals(controller);

ReactDOM.render(<Container controller={controller}><Home /></Container>, document.getElementById('root'));
