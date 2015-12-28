function setInputValue(input, state) {
  state.set(input.path, input.value);
}

export default setInputValue;
