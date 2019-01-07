import React from 'react';
import SingleToDo from './SingleToDo'
import AddToDoForm from './AddToDoForm'

let ToDoList = (props) => {

	let todoList = props.todos.map((t,ind) => {
			return(
				<SingleToDo
					todo={t}
					key={ind}
					index={ind}
					txt={t.text}
					completeToDo={props.completeTodo}
					removeToDo={props.removeTodo}
				/>
			)
		})

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