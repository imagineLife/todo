import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

	state = {
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

	render(){
		return (
			<div>
				<p>Dummy React Component here!</p>
			</div>
		);	
	}
};

export default App;
ReactDOM.render(<App />, document.getElementById("app"));