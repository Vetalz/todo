/* eslint-disable react/prop-types */
import React, { useCallback, useState } from 'react';

function AddTask({ add }) {
  const [text, setText] = useState('');

  const addTask = useCallback(() => {
    if (text.trim().length) {
      add(text);
      setText('');
    }
  }, [text]);

  function onChange(e) {
    setText(e.target.value);
  }
  function onClick() {
    addTask();
  }
  return (
    <div className="input-group">
      <input type="text" className="form-control" value={text} onChange={onChange} />
      <button className="btn btn-outline-secondary" type="button" onClick={onClick}>Add task</button>
    </div>
  );
}

export default AddTask;
