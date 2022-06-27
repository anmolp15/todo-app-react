import './App.css';
import Read from './components/read/Read';

function App() {

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <div className="container">
        <Read />
      </div>
      <button className='add-task'>Create New Item</button>
    </div>
  );
}

export default App;
