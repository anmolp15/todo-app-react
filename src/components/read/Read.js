import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/todos";

export default function Read() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get(URL).then((res) => setData(res.data));
  }, []);

  return (
    <div>
      {data.map((item, index) => {
        if (item.userId === 1) {
          return (
            <div className="todo-item" key={item.id}>
              <div className="title">
                <span>
                  <b>{index + 1}</b>
                </span>
                . {item.title}
              </div>
              <div className="btns">
                <button className="edit">
                  <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                </button>
                <button className="done">
                  <i className="fa fa-check" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}
