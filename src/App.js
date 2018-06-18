import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 27 }
    ],
    otherState: 'some other value '
  }

  switchNameHandler = (newName) => {
    //console.log('Was Clicked!');
    //Don't do this
    //this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27  }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Rafael', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 27  }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi,I am a react APP</h1>
        <h1>This is really working</h1>
        <button onClick={() => this.switchNameHandler('Maximollion!') } >Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age } 
          click={ this.switchNameHandler.bind(this,'Max!') }
          changed={this.nameChangedHandler}  >My Hobbies Racing </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age } />
      </div>
      
    ); 
   // return React.createElement('div',{className: 'App'} , React.createElement('div', null,'Does this work now'));

  }
}

export default App;

