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

		this.addTodo = this.addTodo.bind(this)
	}

	addTodo(text){
		const newTodos = [...this.state.todos, { text }];
		this.setState({ todos: newTodos });
	};

	render(){			

		return (
			<ToDoList
				addTodo={this.addTodo}/>
		);	
	}
};

export default ContextApp;