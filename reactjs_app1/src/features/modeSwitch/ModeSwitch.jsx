import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeMode } from './modeSwitchSlice'

function ModeSwitch() {
    const modeValue = useSelector(state => state.modeSwitch.lightMode)
    const dispatch = useDispatch()

    return (
        <div className="mode-switch">
            <span className="switch-label">Change light/dark mode: </span>
            <span className="switch-main">
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                </label>
            </span>
        </div>
    )
}

export default ModeSwitch;