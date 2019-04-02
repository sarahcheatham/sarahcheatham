import React, { Component } from 'react';
import ContactInfo from './components/ContactInfo/ContactInfo';
import Bio from './components/Bio/Bio';
import ProjectsHeader from "./components/Projects/ProjectsHeader";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Bio/>
        <ProjectsHeader/>
        <ContactInfo/>
      </div>
    );
  }
}

export default App;
