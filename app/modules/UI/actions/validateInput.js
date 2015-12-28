function validateInput(input, state) {
  state.set([...input.path, 'error'], input.value.indexOf('@') >= 0 ? null : input.validationError);
}

export default validateInput;
