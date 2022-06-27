import { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com/todos';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get(URL)
      .then(res => setData(res.data))
  }, [])


  return (
    <div className="App">
      <h1>ToDo List</h1>
      <div className="container">

        {data.map((item, index) => {
          if (item.userId === 1) {
            return (
              <div className="todo-item" key={item.id}>
                <div className="title"><span><i>{index+1}</i></span>. {item.title}</div>
                <div className="btns">
                  <button className="edit"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                  <button className="done"><i className="fa fa-check" aria-hidden="true"></i></button>
                </div>
              </div>
            )
          }
          return null;
        })}
        
      </div>
      <button className='add-task'>Create New Item</button>
    </div>
  );
}

export default App;
