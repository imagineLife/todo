import React from "react";
import ReactDOM from "react-dom";
import DefaultApp from "./DefaultApp";
import ContextApp from "./ContextApp";
import HooksApp from "./HooksApp";
import ReduxApp from "./ReduxApp";
import { ToDoProvider, ToDoConsumer } from "./ToDoContext.js"
import style from "./main.css";

//Redux-Specific
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './state/reducers/index'


//ALL-BUT Redux Here
// ReactDOM.render(<ReduxApp />, document.getElementById("app"));


//REDUX-SPECIFIc
const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <ReduxApp />
  </Provider>, document.getElementById("app"));


//IF Context, use THESE...
// export default function Root(){
// 	return(
// 		<ToDoConsumer>
// 			{({todos}) => 
// 				<ContextApp />
// 			}
// 		</ToDoConsumer>
// 	)
// }

// ReactDOM.render(
// 	<ToDoProvider>
// 		<Root />
// 	 </ToDoProvider>, 
// 	document.getElementById("app"));