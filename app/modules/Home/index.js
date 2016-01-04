import React, { PropTypes } from 'react';
import { Decorator as Cerebral, Link } from 'cerebral-react';
import Title from './components/Title';

@Cerebral({
  title: ['title'],
  color: ['color']
})
class Home extends React.Component {

  static propTypes = {
    color: PropTypes.string,
    title: PropTypes.string
  };

  render() {
    return (
      <div>
        <Title color={this.props.color}>{this.props.title}</Title>
        <button onClick={() => this.props.signals.colorChanged({color: 'red'})}>Red</button>
        {' | '}
        <button onClick={() => this.props.signals.colorChanged({color: 'blue'})}>Blue</button>
      </div>
    );
  }
}

export default Home;
