import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ModeSwitch from '../features/modeSwitch/ModeSwitch';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {FcMenu} from "react-icons/fc";

function Navbar(props) {
  const location = useLocation();
  const homeBtn = useRef(null);
  const calendarBtn = useRef(null);
  const modeValue = useSelector(state => state.modeSwitch.mode);
  const {mobileMenuExpended} = props;


  function handleClearActiveBtn() {
    homeBtn.current.classList.remove('navbar__link--active');
    calendarBtn.current.classList.remove('navbar__link--active');
  }

  function handleActiveBtn() {
    switch (location.pathname) {
      case "/":
        handleClearActiveBtn();
        homeBtn.current.classList.add('navbar__link--active');
        break;
      case "/calendar":
        handleClearActiveBtn();
        calendarBtn.current.classList.add('navbar__link--active');
        break;
      default:
        handleClearActiveBtn();
        break;
    }
  }


  useEffect(() => {
    // Marking and unmarking an Navbar buttons depending on the url
    handleActiveBtn();
  }, [location.pathname]);

  useEffect(() => {
    // dark mode to root
    if(modeValue){
      document.getElementById('root').classList.add('dark');
    } else {
      document.getElementById('root').classList.remove('dark');
    }
  }, [modeValue]);

  
  console.log(props);
  return (
    <div className={"navbar" + (modeValue ? " dark" : "") + ` ${props.colClasses}`+ (mobileMenuExpended ? " responsive" : "")}>
      <div className="row">
      <Link to="/" ref={homeBtn} className="navbar__link col-12 col-s-12 col-m-2 col-l-3 col-xl-3 ">Home</Link>
      <Link to="/calendar" ref={calendarBtn} className="navbar__link col-12 col-s-12 col-m-5 col-l-3 col-xl-3">Make an appointment</Link>
      <ModeSwitch />
      </div>
    </div>
  );
}

Navbar.propTypes = {
  colClasses: PropTypes.string,
  mobileMenuExpended: PropTypes.bool
}

Navbar.defaultProps = {
  colClasses: "",
  mobileMenuExpended: false
}
export default Navbar;