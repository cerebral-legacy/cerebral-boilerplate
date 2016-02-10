import colorChanged from './signals/colorChanged';

export default (options = {}) => {
  return (module, controller) => {

    module.addState(window.BOOTSTRAP.example);

    module.addSignals({
      colorChanged
    });

  };
}
