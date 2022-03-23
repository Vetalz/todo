/* eslint-disable react/prop-types */
import React from 'react';
import Item from './Item';

function List({
  tasks,
  changeText,
  deleteItem,
  setComplited,
}) {
  return (
    <div className="card mt-4">
      <ul className="list-group list-group-flush">
        {
          tasks.map((item) => (
            <Item
              key={item.id}
              task={item}
              changeText={changeText}
              deleteItem={deleteItem}
              setComplited={setComplited}
            />
          ))
        }
      </ul>
    </div>
  );
}

export default List;
