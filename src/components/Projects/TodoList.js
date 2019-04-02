import React from 'react';
import "./Projects.css";
import todolist from '../../images/todolist.png';

class TodoList extends React.Component{
    render(){
        return(
            <div className="todolist">
                <div className="todolistContent">
                    <h2 className="todolistHeader"><a href="https://sarahcheatham.github.io/todo/">To Do List</a></h2>
                    <p className="todolistDesc">A front-end to-do list application built with React.js.</p>
                </div>
               <img
                    src={todolist}
                    alt="todolist"
                    id="todolistimg"
                />
            </div>
        );
    }
}

export default TodoList;