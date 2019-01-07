/*
	Notes on conversion from CLASS to Context functional app
*/

import React from "react";
import ReactDOM from "react-dom";
import ToDoList from './components/ToDoList'
import './main.css'

class ContextApp extends React.Component {

	constructor(props){
		super(props)

		this.completeTodo = this.completeTodo.bind(this)
		this.removeTodo = this.removeTodo.bind(this)
		this.addTodo = this.addTodo.bind(this)
	}

	removeTodo(index){
		const newTodos = [...this.state.todos];
		newTodos.splice(index, 1);
		this.setState({ todos: newTodos });
	};

	addTodo(text){
		const newTodos = [...this.state.todos, { text }];
		this.setState({ todos: newTodos });
	};

	render(){			

		return (
			<ToDoList
				removeTodo={this.removeTodo}
				addTodo={this.addTodo}/>
		);	
	}
};

export default ContextApp;