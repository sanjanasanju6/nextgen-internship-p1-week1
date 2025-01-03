import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">FusionWork Collab</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/chat" className="nav-link">Saved Documents</Link>
            </li>
            <li className="nav-item">
              <Link to="/create" className="nav-link">Create Document</Link>
            </li>
            <li className="nav-item">
              <Link to="/edit" className="nav-link">Edit Document</Link>
            </li>
            <li className="nav-item">
              <Link to="/collaborate" className="nav-link">Collaborate</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

