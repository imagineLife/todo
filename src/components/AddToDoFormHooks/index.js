import React, { useState } from 'react';
import './index.css';

export default function AddToDoFormHooks(props){

	//"" is a default value in the useState init
	const [ val, setVal ] = useState("");

	//destructure from props
	const { addTodo } = props;

	const updateValue = e => {
		this.setState({ value: e.target.value });
	}

	const handleSubmit = e => {
		e.preventDefault();
		if (!value) return;
		addTodo(this.state.value);
		setVal("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				className="input"
				value={value}
				onChange={updateValue}/>
		</form>
	);
}
