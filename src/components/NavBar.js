import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="nav">
      <div>ToDo List</div>
      <button id="home-btn">
        <Link to="/">
          <i className="fa fa-home" aria-hidden="true"></i>
        </Link>
      </button>
    </div>
  );
}
