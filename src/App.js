import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

	constructor(props){
		super(props)

		this.state = {
		    todos: [
		      {
		        text: "Learn about React",
		        isCompleted: false
		      },
		      {
		        text: "Meet friend for lunch",
		        isCompleted: false
		      },
		      {
		        text: "Build really cool todo app",
		        isCompleted: false
		      }
		    ]
		};

		this.completeTodo = this.completeTodo.bind(this)
		this.removeTodo = this.removeTodo.bind(this)
	}

	completeTodo(index){
		const newTodos = [...this.state.todos];
		newTodos[index].isCompleted = true;
		this.setState({ todos: newTodos });
	};

	removeTodo(index){
		const newTodos = [...this.state.todos];
		newTodos.splice(index, 1);
		this.setState({ todos: newTodos });
	};

	render(){

		//destructure to-dos from state
		const { todos } = this.state;
			
		let todoList = todos.map(t => {
			return(
				<div key={t.text}>
					<p>{t.text}</p>
				</div>
			)
		})

		return (
			<div className="todoWrapper">
				{todoList}
			</div>
		);	
	}
};

export default App;
ReactDOM.render(<App />, document.getElementById("app"));