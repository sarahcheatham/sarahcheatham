import React from 'react';
import "./Projects.css";
import todolist from '../../images/todolist.png';

class TodoList extends React.Component{
    render(){
        return(
            <div className="todolist">
               <h2 className="todolistHeader"><a href="https://sarahcheatham.github.io/todo/">To Do List</a></h2>
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