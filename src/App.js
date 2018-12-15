import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
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