import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ModeSwitch from '../features/modeSwitch/ModeSwitch';

function Navbar() {
  const location = useLocation();
  const homeBtn = useRef(null);
  const calendarBtn = useRef(null);

  function handleClearActiveBtn() {
    homeBtn.current.classList.remove('navbar__link--active');
    calendarBtn.current.classList.remove('navbar__link--active');
  }

  function handleActiveBtn() {
    switch(location.pathname) {
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
  },[location.pathname]);


  return (
    <div className="navbar">
      <Link to="/" ref={homeBtn} className="navbar__link">Home</Link>
      <Link to="/calendar" ref={calendarBtn} className="navbar__link">Make an appointment</Link>
      <ModeSwitch />
    </div>
  );
}
export default Navbar;