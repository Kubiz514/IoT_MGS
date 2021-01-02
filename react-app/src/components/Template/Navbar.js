import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <Link to="/" class="navbar-brand" aria-current="page">IoT MGS</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link to="/login" class="nav-link active" aria-current="page">Log in</Link>
                </li>
                <li class="nav-item">
                  <Link to="/profile" class="nav-link active" aria-current="page">Profile</Link>
                </li>
                <li class="nav-item">
                  <Link to="/dashboard" class="nav-link active" aria-current="page">Dashboard</Link>
                </li>
              </ul>
            </div>
          </div>
      </nav>
    )
  }
}

export default Navbar;
