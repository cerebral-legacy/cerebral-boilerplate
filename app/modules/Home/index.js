import React from 'react';
import {Decorator as Cerebral, Link} from 'cerebral-react';
import Title from './components/Title';

@Cerebral({
  title: ['title'],
  color: ['color']
})
class App extends React.Component {
  render() {
    return (
      <div>
        <Title color={this.props.color}>{this.props.title}</Title>
        <Link signal="colorChanged" params={{color: 'red'}}>Red</Link>
        {' | '}
        <Link signal="colorChanged" params={{color: 'blue'}}>Blue</Link>
      </div>
    );
  }
}

export default App;
