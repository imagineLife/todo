import React from 'react';
import SingleToDoContext from './SingleToDoContext'
import AddToDoForm from './AddToDoForm'
import { ToDoConsumer } from '../ToDoContext';

let ToDoList = (props) => {

	return(
		<div className="todoWrapper">
			<div className="todo-list">
				<ToDoConsumer>
					{({todos}) =>
						todos ?
						todos.map((todo, ind) => {
							return<SingleToDoContext
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
				<AddToDoForm  addTodo={props.addTodo}/>
			</div>	
		</div>
	)
}

export default ToDoList;