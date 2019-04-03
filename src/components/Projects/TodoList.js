import React from 'react';
import "./Projects.css";
import todolist from '../../images/todolist.png';
import Icon from 'react-simple-icons';

class TodoList extends React.Component{
    render(){
        return(
            <div className="todolist">
                <div className="todolistContent">
                    <h2 className="todolistHeader"><a href="https://sarahcheatham.github.io/todo/">To Do List</a></h2>
                    <p className="todolistDesc">A front-end to-do list application built with React.js.</p>
                    <Icon size={26} name='github' fill="#181717" className="github-icon"/><a href="https://github.com/sarahcheatham/todo"><code>GitHub Source</code></a>
                </div>
                <a href="https://sarahcheatham.github.io/todo/" className="todolistimg">
                    <img
                        src={todolist}
                        alt="todolist"
                        id="todolistimg"
                    />
                </a>
            </div>
        );
    }
}

export default TodoList;