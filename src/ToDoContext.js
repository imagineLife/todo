import React from 'react'
import {DUMMY_TODOS} from './dummyAPI'

//contains UserContext.Consumer && UserContext.Provider
const { Provider, Consumer } = React.createContext()

class ToDoProvider extends React.Component{
	state = {
		todos: null,
		newVal: ""
	};

	completeTodo = (index) => {
		const newTodos = [...this.state.todos];
		newTodos[index].isCompleted = true;
		this.setState({ todos: newTodos });
	};

	removeTodo = (index) => {
		const newTodos = [...this.state.todos];
		newTodos.splice(index, 1);
		this.setState({ todos: newTodos });
	};

	addToDo = (text) => {
		let newTodo = {
			txt: text,
			process: 'todo',
			isComplete: false
		};
		const newTodos = [...this.state.todos, newTodo];
		this.setState({ todos: newTodos, newVal: "" });
	};

	updateToDoVal = (newVal) => {		
		this.setState({newVal: newVal})
	}

	componentDidMount(){
		this.setState({todos: DUMMY_TODOS})		
	}

	render(){
		return(
			<Provider value={{ 
				todos: this.state.todos,
				completeTodo: this.completeTodo,
				removeTodo: this.removeTodo,
				addToDo: this.addToDo,
				updateToDoVal: this.updateToDoVal,
				newVal: this.state.newVal
			}}>
				{this.props.children}
			</Provider>

		)
	}
}

export {ToDoProvider, Consumer as ToDoConsumer};