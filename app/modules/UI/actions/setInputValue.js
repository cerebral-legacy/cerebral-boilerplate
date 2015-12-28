function setInputValue(input, state) {
  state.set([...input.path, 'value'], input.value);
}

export default setInputValue;
