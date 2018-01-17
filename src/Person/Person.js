// simple functional Component
import React from 'react';

const person = (props) => {
  console.log('Age: ' + props.age + ' Name: ' + props.name);
  return <p>I'm {props.name} and I am {props.age} years old!</p>
};

export default person;
