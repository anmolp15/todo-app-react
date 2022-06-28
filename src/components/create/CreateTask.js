import React, { useState } from "react";
import Axios from "axios";
// import { useNavigate } from 'react-router-dom'

const URL = "https://jsonplaceholder.typicode.com/todos";

export default function CreateTask() {
  const [title, setTitle] = useState("");
  const [newTasks, setNewTasks] = useState([]);

  // const navigate = useNavigate();

  function postData() {
    let newTask = {
      title: title,
      body: title,
      userId: 1,
    };
    let response = Axios.post(URL, newTask);
    setNewTasks([...newTasks, newTask]);
    // navigate('/');
    console.log(response)
  }

  return (
    <>
      <div className="input">
        <input
          type="text"
          name="title"
          id="task-title"
          placeholder="Task Title..."
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <button className="add-task" onClick={postData} type="submit">
          Add Task
        </button>
      </div>
    </>
  );
}
