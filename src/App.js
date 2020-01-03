import React, { Component } from 'react';
import AddNote from './components/AddNote';
import Notes from './components/Notes';
import './App.css';

class App extends Component {

constructor(){
  super()
  this.parentHandler=this.parentHandler.bind(this);
}

  parentHandler=()=>{
    this.refs.filter.filterNotes();
  }

  render() {
  return (
    <div className="container">
     <AddNote onChild={this.parentHandler} />
     <Notes ref="filter"/>
    </div>
  );
  }
}

export default App;
