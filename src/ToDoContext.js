import React from 'react'

//contains UserContext.Consumer && UserContext.Provider
const { Provider, Consumer } = React.createContext()

class ToDoProvider extends React.Component{
	state = {
		todos: null
	};

	render(){
		return(
			<Provider
				value={{
		          todos: this.state.todos
		        }}>
				{this.props.children}
			</Provider>

		)
	}
}

export {ToDoProvider, Consumer as ToDoConsumer};