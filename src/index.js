import React from "react";
import ReactDOM from "react-dom";
import DefaultApp from "./DefaultApp";
import ContextApp from "./ContextApp";
import HooksApp from "./HooksApp";
import ReduxApp from "./ReduxApp";
import { ToDoProvider, ToDoConsumer } from "./ToDoContext.js"
import style from "./main.css";

// ReactDOM.render(<ReduxApp />, document.getElementById("app"));



//IF Context, use THESE...
export default function Root(){
	return(
		<ToDoConsumer>
			{({todos}) => 
				<ContextApp />
			}
		</ToDoConsumer>
	)
}

ReactDOM.render(
	<ToDoProvider>
		<Root />
	 </ToDoProvider>, 
	document.getElementById("app"));