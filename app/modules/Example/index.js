import colorChanged from './signals/colorChanged';
import rootRouted from './signals/rootRouted';

export default (options = {}) => {
  return (module, controller) => {

    module.addState({
      title: 'You can change the url too!',
      color: '#333'
    });

    module.addSignals({
      rootRouted,
      colorChanged
    });

  };
}
