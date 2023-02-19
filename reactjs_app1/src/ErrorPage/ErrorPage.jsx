import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function ErrorPage() {
    const modeValue = useSelector(state => state.modeSwitch.mode);
    return <div className={"page" + (modeValue ? " dark" : "")}>This page does not exist.</div>
}

export default ErrorPage;