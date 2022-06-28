import "./App.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import { Routes, Route } from "react-router-dom";
import Read from "./components/read/Read";
import CreateTask from "./components/create/CreateTask";
import Update from "./components/update/Update";
import NavBar from "./components/NavBar";

const URL = "https://jsonplaceholder.typicode.com/todos";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get(URL).then((res) => setData(res.data));
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Read data={data} />} />
        <Route exact path="/create-task" element={<CreateTask />} />
        <Route exact path="/update/:id" element={<Update data={data} />} />
      </Routes>
    </div>
  );
}

export default App;
