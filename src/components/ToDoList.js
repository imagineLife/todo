import React from 'react';
import SingleToDo from './SingleToDo'
import AddToDoForm from './AddToDoForm'
import { ToDoConsumer } from '../ToDoContext';

let ToDoList = (props) => {

	let todoList = <ToDoConsumer>
		{({todos}) =>
			todos ?
			todos.map((todo, ind) => {
				return<SingleToDo
					todo={todo}
					key={ind}
					index={ind}
					txt={todo.txt}
					completeToDo={props.completeTodo}
					removeToDo={props.removeTodo}
				/>;
			}) : <div></div>
		}
	</ToDoConsumer>

	return(
		<div className="todoWrapper">
			<div className="todo-list">
				{todoList}
				<AddToDoForm  addTodo={props.addTodo}/>
			</div>	
		</div>
	)
}

export default ToDoList;