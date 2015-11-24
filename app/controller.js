import Controller from 'cerebral';
import Model from 'cerebral-baobab';

const model = Model({
  title: 'Hello world!',
  color: '#333'
});

export default Controller(model);
