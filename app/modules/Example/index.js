import colorChanged from './signals/colorChanged';
import rootRouted from './signals/rootRouted';

export default (options = {}) => {
  return (module, controller) => {

    module.state({
      title: 'You can change the url too!',
      color: '#333'
    });

    module.signals({
      rootRouted,
      colorChanged
    });

  };
}
