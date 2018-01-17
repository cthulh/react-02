import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Bob', age: 32 },
      { name: 'Tim', age: 34 },
      { name: 'Claire', age: 36 }
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>React app</h1>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>I love running!</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    // the above code is compiled to the below commands:
  //   return React.createElement('div',{className: 'App'},
  //     React.createElement('h1',null,'Header'));
  }
}

export default App;
