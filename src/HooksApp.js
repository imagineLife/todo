/*
	including notes on converting from class to function+hooks
*/

//0 using 'next' release of react for hooks
//1. import useState from react
import React, { useState } from "react";
import ReactDOM from "react-dom";
import SingleToDo from './components/SingleToDo'
import AddToDoForm from './components/AddToDoForm'
import './main.css'

//convert from class to fn
function HooksApp(){


/*
	replace a constructor and state with useState
*/
	const [todos, setTodos] = useState([
      {
        text: "Learn about React",
        isCompleted: false
      },
      {
        text: "Meet friend for lunch",
        isCompleted: false
      },
      {
        text: "Build really cool todo app",
        isCompleted: false
      }
    ])

	const completeTodo = todoIndex => {
		const newTodos = [...todos];
		newTodos[todoIndex].isCompleted = true;
		setTodos(newTodos);
	};

	const removeTodo = todoIndex => {
		const newTodos = [...todos];
		newTodos.splice(todoIndex, 1);
		setTodos(newTodos);
	};

	const addTodo = todoText => {
		const newTodos = [...todos, { todoText }];
		setTodos(newTodos);
	};
		
	let todoList = todos.map((t,ind) => {
		return(
			<SingleToDo
				todo={t}
				key={ind}
				index={ind}
				txt={t.text}
				completeToDo={this.completeTodo}
				removeToDo={this.removeTodo}
			/>
		)
	})

	return (
		<div className="todoWrapper">
			<div className="todo-list">
				{todoList}
				<AddToDoForm  addTodo={this.addTodo}/>
			</div>	
		</div>
	);	
};

export default HooksApp;