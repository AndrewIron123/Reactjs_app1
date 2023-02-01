import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function HomePage() {
 const modeValue = useSelector(state => state.modeSwitch.mode);
 return <div className={"page" + (modeValue ? " dark" : "")}>HomePage</div>
}

export default HomePage;