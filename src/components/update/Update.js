import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/todos";

export default function Update(props) {
  const data = props.data;
  const { id } = useParams();
  let taskToBeUpdated = { title: "" };
  data.forEach((item) => {
    if (item.userId === 1 && item.id.toString() === id) {
      taskToBeUpdated = item;
    }
  });

  const [title, setTitle] = useState(taskToBeUpdated.title);

  function updateTask() {
    const updatedTask = {
      id: id,
      title: title,
      userId: 1,
    };
    Axios.put(`${URL}/${id}`, updatedTask)
      .then(() => {
        window.alert('Task Updated Successfully!')
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <div className="input">
        <input
          type="text"
          name="title"
          id="task-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <button className="add-task" type="submit" onClick={updateTask}>
          Update Task
        </button>
      </div>
    </div>
  );
}
