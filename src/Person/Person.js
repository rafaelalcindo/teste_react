import React from 'react';
import Radium from 'radium';

import './Person.css';

const person = (props) => {
    
    return (
        <div className="Person"  >
            <p onClick={ props.click } >I'M a {props.name} and I am { props.age } Year old!</p>
            <p>{ props.children }</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
    
}

export default person;