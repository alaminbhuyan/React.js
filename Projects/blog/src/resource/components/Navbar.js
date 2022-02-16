import { Link, NavLink } from "react-router-dom";
import * as React from "react";

const Navbar = () => {
  return (
    <React.Fragment>
      {/* <ul>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/about" >About</Link></li>
                <li><Link to="/contact" >Contact</Link></li>
            </ul> */}

      {/* <ul>
                <li><NavLink to="/" style={({ isActive }) => {
                    return {
                    backgroundColor: isActive ? 'red' : ''
                }}} >Home</NavLink></li>
                <li><NavLink to="/about" style={({ isActive }) => {
                    return {
                    backgroundColor: isActive ? 'red' : ''
                }}} >About</NavLink></li>
                <li><NavLink to="/contact" style={({ isActive }) => {
                    return {
                    backgroundColor: isActive ? 'red' : ''
                }}} >Contact</NavLink></li>
            </ul> */}

      {/* <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul> */}

      <div className="sticky-top">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <NavLink className="navbar-brand fw-bold" to="/">
              CodeWithAlamin
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link active" aria-current="page"
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "black" : "",
                      };}}>Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active" to="/about"
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "black" : "",
                      };
                    }} > About Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active" to="/contact"
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "black" : "",
                      };
                    }} > Contact
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active" to="/blog"
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "black" : "",
                      };
                    }}
                  > Blog </NavLink>
                </li>
                {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                    </li> */}
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-danger" type="submit">
                  Search
                </button>
              </form>

              {/* <ul className="navbar-nav mx-2 mb-2 mb-lg-0">
                <li className="nav-item btn" style={{backgroundColor:'orange'}}>LogIn</li>
                <li className="nav-item btn mx-2" style={{backgroundColor:'orange'}}>SignIn</li>
              </ul> */}
            </div>
          </div>
        </nav>
      </div>

    </React.Fragment>
  );
};

export default Navbar;
