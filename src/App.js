/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-no-bind */
import React, { useCallback, useState } from 'react';
import './App.css';
import AddTask from './AddTask';
import List from './List';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'task 1', complited: false },
    { id: 2, text: 'task 2', complited: false },
    { id: 3, text: 'task 3', complited: false },
  ]);

  const changeText = useCallback((text, id) => {
    setTasks(tasks.map((i) => {
      if (id === i.id) {
        i.text = text;
      }
      return i;
    }));
  }, [tasks]);

  const deleteItem = useCallback((id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  }, [tasks]);

  const setComplited = useCallback((id) => {
    setTasks(tasks.map((i) => {
      if (id === i.id) {
        i.complited = !i.complited;
      }
      return i;
    }));
  }, [tasks]);

  const add = useCallback((text) => {
    setTasks([...tasks,
      {
        id: Date.now(),
        text,
        complited: false,
      }]);
  }, [tasks]);

  return (
    <div className="App">
      <div className="list p-4">
        <h1 className="mb-4">Todo list</h1>
        <AddTask add={add} />
        {tasks.length ? (
          <List
            tasks={tasks}
            changeText={changeText}
            deleteItem={deleteItem}
            setComplited={setComplited}
          />
        ) : <h2 className="mt-4">No tasks</h2>}
      </div>
    </div>
  );
}

export default App;
