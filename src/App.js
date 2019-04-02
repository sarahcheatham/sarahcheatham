import React, { Component } from 'react';
import Bio from './components/Bio/Bio';
import ProjectsHeader from "./components/Projects/ProjectsHeader";
import Projects from './components/Projects/Projects';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Bio/>
        <ProjectsHeader/>
        <Projects/>
      </div>
    );
  }
}

export default App;
