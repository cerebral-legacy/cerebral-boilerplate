import React from 'react';
import {Decorator as Cerebral} from 'cerebral-react';
import styles from './styles.css';

@Cerebral((props) => {
  return {
    value: props.path
  };
})
class Input extends React.Component {
  onInputChange(value) {
    this.props.signals.UI.inputChanged.sync({
      path: this.props.path,
      value
    });
  }
  render() {
    return (
      <div className={styles.input}>
        <input value={this.props.value} onChange={(event) => this.onInputChange(event.target.value)}/>
      </div>
    );
  }
}

export default Input;
