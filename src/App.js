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

/*
JakesMBP:todo Jake$ gp
fatal: The current branch stateDeclaration has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin stateDeclaration

JakesMBP:todo Jake$ git push --set-upstream origin stateDeclaration
Counting objects: 12, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (12/12), done.
Writing objects: 100% (12/12), 1.50 KiB | 770.00 KiB/s, done.
Total 12 (delta 5), reused 0 (delta 0)
remote: Resolving deltas: 100% (5/5), completed with 1 local object.
remote: 
remote: Create a pull request for 'stateDeclaration' on GitHub by visiting:
remote:      https://github.com/imagineLife/todo/pull/new/stateDeclaration
remote: 
To https://github.com/imagineLife/todo.git
 * [new branch]      stateDeclaration -> stateDeclaration
Branch 'stateDeclaration' set up to track remote branch 'stateDeclaration' from 'origin'.
*/