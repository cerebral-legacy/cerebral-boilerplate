import React from 'react';
import {Decorator as Cerebral} from 'cerebral-react';
import Title from './components/Title';
import Input from '../UI/Input';

@Cerebral({
  title: ['title'],
  color: ['color'],
  todos: ['todos'],
  // falcorTodos: ['falcor','todos']
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
        {/*
        <h3>Firebase</h3>
        <ul>
          {this.props.todos.map(todo => <li>{todo.title}</li>)}
        </ul>
        */}
        <h3>Falcor</h3>
        <ul>
          {Object.keys(this.props.todos).map(id => <li>{this.props.todos[id].title}</li>)}
        </ul>
        <h3>Input</h3>
        <Input path={['inputValue']}/>
      </div>
    );
  }
}

export default App;
