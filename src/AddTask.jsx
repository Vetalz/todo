/* eslint-disable react/prop-types */
import React, { useState } from 'react';

function AddTask({ add }) {
  const [text, setText] = useState('');

  function addTask() {
    if (text.trim().length) {
      add(text);
      setText('');
    }
  }

  return (
    <div className="input-group">
      <input type="text" className="form-control" value={text} onChange={(e) => setText(e.target.value)} />
      <button className="btn btn-outline-secondary" type="button" onClick={() => addTask()}>Add task</button>
    </div>
  );
}

export default AddTask;
