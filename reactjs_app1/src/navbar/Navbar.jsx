import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ModeSwitch from '../features/modeSwitch/ModeSwitch';
import { useSelector } from 'react-redux';

function Navbar() {
  const location = useLocation();
  const homeBtn = useRef(null);
  const calendarBtn = useRef(null);
  const modeValue = useSelector(state => state.modeSwitch.mode)

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

  
  return (
    <div className={"navbar" + (modeValue ? " dark" : "")}>
      <Link to="/" ref={homeBtn} className="navbar__link">Home</Link>
      <Link to="/calendar" ref={calendarBtn} className="navbar__link">Make an appointment</Link>
      <ModeSwitch />
    </div>
  );
}
export default Navbar;