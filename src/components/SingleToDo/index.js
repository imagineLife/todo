import React from 'react';
import './index.css';

export default function SingleToDo(props) {
	let { todo, index, completeToDo, removeToDo, txt } = props;
	return(
		<div
			className="todo"
			style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
			{txt}
			<button onClick={() => completeToDo(index)}>Complete</button>
			<button onClick={() => removeToDo(index)}>x</button>
		</div>
	);
}
