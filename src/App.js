import React from 'react';
import './App.css';
import AddTodo from './components/addtodo';
import { Provider } from 'react-redux'
import store from './redux/store'
import Todolist from './components/Todolist'


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AddTodo />
        <Todolist />
      </div>
    </Provider>
  );
}

export default App;
