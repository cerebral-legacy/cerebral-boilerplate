function syncTodos(input, state, output, services) {
  services.firebase.sync('todos', ['todos']);
}

export default syncTodos;
