import React from 'react';
import './index.css';
import { ToDoConsumer } from '../../ToDoContext';

export default function SingleToDo(props) {
	let { todo, index, removeToDo, txt } = props;
	return(
		<div
			className="todo"
			style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
			{txt}

			<ToDoConsumer>
				{({completeTodo}) => 
					<React.Fragment>
						<button onClick={() => completeTodo(index)}>Complete</button>
						<button onClick={() => removeToDo(index)}>x</button>
					</React.Fragment>	
				}
			</ToDoConsumer>	
		</div>
	);
}
