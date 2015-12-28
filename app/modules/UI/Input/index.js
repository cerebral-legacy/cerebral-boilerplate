import React from 'react';
import {Decorator as Cerebral} from 'cerebral-react';
import styles from './styles.css';

@Cerebral((props) => {
  return {
    input: props.path
  };
})
class Input extends React.Component {
  onInputChange(value) {
    this.props.signals.UI.inputChanged.sync({
      path: this.props.path,
      value,
      validations: this.props.validations,
      validationError: this.props.validationError
    });
  }
  componentDidMount() {
    this.onInputChange(this.props.input.value);
  }
  render() {
    return (
      <div className={styles.input}>
        <input value={this.props.input.value} onChange={(event) => this.onInputChange(event.target.value)}/>
        {
          this.props.input.error ?
            `Error: ${this.props.input.error}`
          :
            null
        }
      </div>
    );
  }
}

export default Input;
