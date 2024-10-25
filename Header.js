import React from 'react';
//import styled from 'styled-components';
import PropTypes from 'prop-types';
//import {Link} from 'react-router-dom'


const Header = (props) => {
    return <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
   {/* <Link className="navbar-brand" to="/"><strong>{props.title}</strong></Link>*/}
    <a className="navbar-brand" href="/"><strong>{props.title}</strong></a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
         {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link>*/}
          <a className="nav-link active" aria-current="page" href="/">Home</a>

        </li>
        <li className="nav-item">
         {/* <Link className="nav-link active" aria-current="page" to="/about">About</Link>*/}
          <a className="nav-link active" aria-current="page" href="/">About</a>

        </li>
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Color themes
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
       
      </ul>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
      {/* eslint-disable-next-line*/}
  <input className="form-check-input " onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" for="flexSwitchCheckDefault">dark mode </label>
</div>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      
      </form>
      
    </div>
  </div>
</nav>
    </div>;
}

Header.propTypes = {
 title:PropTypes.string.isRequired
}
Header.defaultProps = {
title:"Set Title here"
}
// #endregion

export default Header;