import React from 'react';
import './index.css';
import { ToDoConsumer } from '../../../ToDoContext';

export default function SingleToDoContext(props) {
	let { todo, index, txt } = props;
	return(
		<div
			className="todo"
			style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
			{txt}

			<ToDoConsumer>
				{({completeTodo, removeTodo}) => 
					<React.Fragment>
						<button onClick={() => completeTodo(index)}>Complete</button>
						<button onClick={() => removeTodo(index)}>x</button>
					</React.Fragment>	
				}
			</ToDoConsumer>	
		</div>
	);
}
