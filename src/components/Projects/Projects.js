import React from 'react';
import "./Projects.css";
import Arraynge from './Arraynge';
import JSCheats from './JSCheats';
import TodoList from './TodoList';

class Projects extends React.Component{
    render(){
        return(
            <div className="projects">
               <Arraynge/>
               <JSCheats/>
               <TodoList/>
            </div>
        );
    }
}

export default Projects;