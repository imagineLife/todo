import React from 'react';
import './index.css';
import {ToDoConsumer} from '../../../ToDoContext'
export default class AddToDoForm extends React.Component{
	constructor(props){
		super(props)
		this.state = { value: "" };	
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(e, addToDo){
		e.preventDefault();
		let thisVal = e.target[0].value
		addToDo(thisVal);
	};

	render() {
		const { value } = this.state;

		return (
			<ToDoConsumer>
				{({addToDo, updateToDoVal, newVal}) => 
					<form onSubmit={(e, thisVal) => this.handleSubmit(e, addToDo)}>
						<input
							type="text"
							className="input"
							value={newVal}
							onChange={(e) => updateToDoVal(e.target.value)}/>
					</form>
				}
			</ToDoConsumer>
		);
	}
}
