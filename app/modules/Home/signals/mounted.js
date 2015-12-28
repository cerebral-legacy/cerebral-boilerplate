import syncTodos from '../actions/syncTodos';
import getFalcorTodos from '../actions/getFalcorTodos';
import inputToState from 'cerebral-addons/inputToState';

export default [
  // syncTodos,
  [getFalcorTodos, {success: [], error: []}]
];
