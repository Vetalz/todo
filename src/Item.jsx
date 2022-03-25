/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencil, faCircleCheck } from '@fortawesome/free-solid-svg-icons';

function Item({
  task, changeText, deleteItem, setComplited,
}) {
  const [activeInput, setActiveInput] = useState(true);
  const [text, setText] = useState(task.text);

  function confirmChange() {
    setActiveInput(true);
    changeText(text, task.id);
  }

  function onClick() {
    setComplited(task.id);
  }
  function onChange(e) {
    setText(e.target.value);
  }
  return (
    <li className="list-group-item">
      <div className="form-check item">
        <div>
          <input
            className="form-check-input checkbox"
            type="checkbox"
            id={task.id}
            onClick={onClick}
          />
          <label className="form-check-label" htmlFor={task.id}>
            <input
              type="text"
              className={task.complited
                ? 'form-control complited'
                : 'form-control'}
              value={text}
              onChange={onChange}
              disabled={activeInput}
            />
          </label>
        </div>
        <div className="settings">
          {activeInput
            ? <FontAwesomeIcon icon={faPencil} className="edit me-2" onClick={() => setActiveInput(false)} />
            : <FontAwesomeIcon icon={faCircleCheck} className="check me-2" onClick={() => confirmChange()} />}
          <FontAwesomeIcon icon={faTrash} className="del" onClick={() => deleteItem(task.id)} />
        </div>
      </div>
    </li>
  );
}

export default Item;
