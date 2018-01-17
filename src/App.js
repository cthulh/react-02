import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Bob', age: 32 },
      { name: 'Tim', age: 34 },
      { name: 'Claire', age: 36 }
    ],
    other: 'Don\'t want to mutate!'
  }

  switchNameHandler = (newName) => {
    //console.log("Button clicked!");
    this.setState({
    persons: [
      { name: newName, age: 32 },
      { name: 'Tim', age: 34 },
      { name: 'Claire', age: 36 }
    ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>React app</h1>
        <button onClick={this.switchNameHandler.bind(this,'Bobby')}>Switch name</button>
        <Person
          click={this.switchNameHandler.bind(this,'Bobber1')}
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}/>
        <Person
          click={this.switchNameHandler.bind(this,'Bobber2')}
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}>I love running!</Person>
        <Person
          click={this.switchNameHandler.bind(this,'Bobber3')}
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}/>
        <p><strong>{this.state.other}</strong></p>
      </div>
    );
    // the above code is compiled to the below commands:
  //   return React.createElement('div',{className: 'App'},
  //     React.createElement('h1',null,'Header'));
  }
}

export default App;
