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
	}

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