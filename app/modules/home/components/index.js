import React, { PropTypes } from 'react';
import { Decorator as Cerebral, Link } from 'cerebral-react';
import Title from './Title';

export default function (module) {

  @Cerebral({
    title: ['title'],
    color: ['color']
  })
  class App extends React.Component {

    static propTypes = {
      color: PropTypes.string,
      title: PropTypes.string
    };

    static defaultProps = {
      color: 'black'
    };

    render() {
      return (
        <div>
          <Title color={this.props.color}>{this.props.title}</Title>
          <Link signal={module.signals.colorChanged} params={{color: 'red'}}>Red</Link>
          {' | '}
          <Link signal={module.signals.colorChanged} params={{color: 'blue'}}>Blue</Link>
        </div>
      );
    }
  }

  return App;
}
