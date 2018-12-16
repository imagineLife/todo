import React from 'react';
import './index.css';

export default class AddToDoForm extends React.Component{
	constructor(props){
		super(props)
		this.state = { value: "" };	
	}

	updateValue(e){
		this.setState({ value: e.target.value });
	}

	handleSubmit(e){
		e.preventDefault();
		if (!this.state.value) return;
		this.props.addTodo(this.state.value);
		this.setState({ value: "" });
	};

	render() {
		const { value } = this.state;

		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type="text"
					className="input"
					value={value}
					onChange={this.updateValue}/>
			</form>
		);
	}
}
