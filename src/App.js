import "./App.css";
import { Routes, Route } from "react-router-dom";
import Read from "./components/read/Read";
import CreateTask from "./components/create/CreateTask";
import Delete from "./components/delete/Delete";
import Update from "./components/update/Update";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route exact path="/" element={<Read />} />
        <Route exact path="/create-task" element={<CreateTask />} />
        <Route exact path="/update/:id" element={<Update />} />
        <Route exact path="/delete/:id" element={<Delete />} />
      </Routes>
      
    </div>
  );
}

export default App;
