import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React app</h1>
        <Person name='Bob' age='32'/>
        <Person name='Tim' age='34'>I love running!</Person>
        <Person name='Claire' age='36'/>
      </div>
    );
    // the above code is compiled to the below commands:
  //   return React.createElement('div',{className: 'App'},
  //     React.createElement('h1',null,'Header'));
  }
}

export default App;
