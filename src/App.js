import React from "react";
import ReactDOM from "react-dom";
import SingleToDo from './components/SingleToDo'
import AddToDoForm from './components/AddToDoForm'

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
		this.addTodo = this.addTodo.bind(this)
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

	addTodo(text){
		const newTodos = [...this.state.todos, { text }];
		this.setState({ todos: newTodos });
	};

	render(){

		//destructure to-dos from state
		const { todos } = this.state;
			
		let todoList = todos.map((t,ind) => {
			return(
				<SingleToDo
					todo={t}
					key={ind}
					index={ind}
					txt={t.text}
					completeToDo={this.completeTodo}
					removeToDo={this.removeTodo}
				/>
			)
		})

		return (
			<div className="todoWrapper">
				{todoList}
				<AddToDoForm  addTodo={this.addTodo}/>
			</div>
		);	
	}
};

export default App;
ReactDOM.render(<App />, document.getElementById("app"));