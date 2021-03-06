// simple functional Component
import React from 'react';

const person = (props) => {
  console.log(props);
  console.log('Age: ' + props.age + ' Name: ' + props.name);
  return (
    <div>
      <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
      <p>{props.children}</p>
    </div>
  )
};

export default person;
