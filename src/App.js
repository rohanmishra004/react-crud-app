import './App.css';
import { useState } from 'react';
import Task from './components/Task'



function App() {
  const [inputText, setInputText] = useState('')
  const [taskList, setTaskList] = useState([])


  const inputTextHandler = (event) => {
    setInputText(event.target.value);
  }

  const addTask = () => {
    const task = {
      id: taskList.length === 0 ? 1 : taskList[taskList.length - 1] + 1,
      name: inputText,
      complete: false
    }
    setTaskList([...taskList, task]);
    if (inputText !== null) {
      setInputText('')
    }
  }

  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => id !== task.id))
  }

  const handleUpdate = (id) => {
    setTaskList(taskList.map((task) => {
      if (task.id === id) {
        return ({ ...task, complete: true })
      } else {
        return task
      }
    }))

  }



  return (
    <div className="App">
      <div className='addTask'>
        <input type="text" onChange={inputTextHandler} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {taskList.map((task) => {
          return <Task handleDelete={handleDelete} name={task.name} id={task.id} handleUpdate={handleUpdate} status={task.complete} />
        })}
      </div>
    </div>
  );
}

export default App;
