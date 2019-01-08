/*
	Notes on conversion from CLASS to Context functional app
*/

import React from "react";
import ReactDOM from "react-dom";
import ToDoListContext from './components/ToDoListContext'
import './main.css'

const ContextApp = () => {		
	return (
		<ToDoListContext />
	);	
};

export default ContextApp;