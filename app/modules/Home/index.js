import Component from './components';
import colorChanged from './signals/colorChanged';

export default {
  init({ controller, name }) {
    return {
      Component: Component(controller.modules[name])
    };
  },
  signals: {
    colorChanged
  },
  services: {}
};
