import React from 'react'
import {DUMMY_TODOS} from './dummyAPI'

//contains UserContext.Consumer && UserContext.Provider
const { Provider, Consumer } = React.createContext()

class ToDoProvider extends React.Component{
	state = {
		todos: null
	};

	completeTodo = (index) => {
		const newTodos = [...this.state.todos];
		newTodos[index].isCompleted = true;
		this.setState({ todos: newTodos });
	};

	componentDidMount(){
		this.setState({todos: DUMMY_TODOS})		
	}

	render(){
		return(
			<Provider value={{ 
				todos: this.state.todos,
				completeTodo: this.completeTodo
			}}>
				{this.props.children}
			</Provider>

		)
	}
}

export {ToDoProvider, Consumer as ToDoConsumer};