import React from "react";

import { Link } from "react-router-dom";

export default function Read(props) {
  const data = props.data;
  return (
    <div>
      <div className="container">
        {data.map((item, index) => {
          if (item.userId === 1) {
            return (
              <div className="todo-item" key={item.id}>
                <div className="title">
                  <div className="s-no">
                    <b>
                      {index + 1}.{"\u00A0"}{" "}
                    </b>
                  </div>
                  {item.title}
                </div>
                <div className="btns">
                  <button className="edit">
                    <Link to={`/update/${item.id}`}>
                      <i
                        className="fa fa-pencil-square-o"
                        aria-hidden="true"
                      ></i>
                    </Link>
                  </button>
                  <button className="done">
                    <Link to={`/delete/${item.id}`}>
                      <i className="fa fa-check" aria-hidden="true"></i>
                    </Link>
                  </button>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
      <button className="add-task">
        <Link to="/create-task">Create New Item</Link>
      </button>
    </div>
  );
}
