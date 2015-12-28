function getFalcorTodos(input, state, output, services) {
  services.falcor.get(['todos', {from: 0, to: 3}, 'title'])
    .then(output.success)
    .catch(output.error);
}

export default getFalcorTodos;
