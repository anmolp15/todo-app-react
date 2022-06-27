import './App.css';

function App() {
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <div className="container">

        <div className="todo-item">
          <div className="title">Task Name</div>
          <div className="btns">
            <button className="edit"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
            <button className="delete"><i className="fa fa-trash-o" aria-hidden="true"></i></button>
          </div>
        </div>
        
        <button className='add-task'>Create New Item</button>
      </div>

    </div>
  );
}

export default App;
