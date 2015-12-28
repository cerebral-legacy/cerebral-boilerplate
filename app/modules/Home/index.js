import React from 'react';
import {Decorator as Cerebral} from 'cerebral-react';
import Title from './components/Title';

@Cerebral({
  title: ['title'],
  color: ['color'],
  todos: ['todos'],
  falcorTodos: ['falcorTodos']
})
class App extends React.Component {
  componentDidMount() {
    this.props.signals.home.mounted();
  }
  render() {
    const signals = this.props.signals.home;

    return (
      <div>
        <Title color={this.props.color}>{this.props.title}</Title>
        <button onClick={() => signals.colorChanged({color: 'red'})}>Red</button>
        {' | '}
        <button onClick={() => signals.colorChanged({color: 'blue'})}>Blue</button>
        <h3>Firebase</h3>
        <ul>
          {this.props.todos.map(todo => <li>{todo.title}</li>)}
        </ul>
        <h3>Falcor</h3>
        <ul>
          {Object.keys(this.props.falcorTodos).map(id => <li>{this.props.falcorTodos[id].title}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
