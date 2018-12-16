import React from 'react';
import './index.css';

export default function SingleToDo(props) {
	let { todo, index, completeTodo, removeTodo, txt } = props;
	return(
		<div
			className="todo"
			style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
			{txt}
			<button onClick={() => completeTodo(index)}>Complete</button>
			<button onClick={() => removeTodo(index)}>x</button>
		</div>
	);
}
