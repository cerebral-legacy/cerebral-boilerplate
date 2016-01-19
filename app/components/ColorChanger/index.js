import React, { PropTypes } from 'react';
import { Decorator as Cerebral, Link } from 'cerebral-view-react';
import Title from './Title';

@Cerebral({
  title: ['example', 'title'],
  color: ['example', 'color']
})
class Home extends React.Component {

  static propTypes = {
    color: PropTypes.string,
    title: PropTypes.string
  };

  render() {
    const signals = this.props.signals.example;

    return (
      <div>
        <Title color={this.props.color}>{this.props.title}</Title>
        <button onClick={() => signals.colorChanged({color: 'red'})}>Red</button>
        {' | '}
        <button onClick={() => signals.colorChanged({color: 'blue'})}>Blue</button>
      </div>
    );
  }
}

export default Home;
