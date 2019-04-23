import React, { Component } from 'react';
import Bio from './components/Bio/Bio';
import ProjectsHeader from "./components/Projects/ProjectsHeader";
import Projects from './components/Projects/Projects';
import WorkHeader from './components/Work/WorkHeader';
import Work from "./components/Work/Work";
import EducationHeader from './components/Education/EducationHeader';
import Education from './components/Education/Education';
import { Row, Container} from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Container>
        <Row>
          <Bio/>
        </Row>
        <Row>
          <ProjectsHeader/>
        </Row>
        <Row>
          <Projects/>
        </Row>
        <Row>
          <WorkHeader/>
        </Row>
        <Row>
          <Work/>
        </Row>
        <Row>
          <EducationHeader/>
        </Row>
        <Row>
          <Education/>
        </Row>
      </Container>
      </div>
    );
  }
}

export default App;
