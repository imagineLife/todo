import React from 'react'
import Footer from './components/Footer/ReduxFooter'
import AddTodoForm from './containers/AddTodoRedux'
import ToDoListWrapper from './containers/ToDoListReduxWrapper'

const App = () => (
  <div>
  	<AddTodoForm />
  	<ToDoListWrapper />
    <Footer />
  </div>
)

export default App