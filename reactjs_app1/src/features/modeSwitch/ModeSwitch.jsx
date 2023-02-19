import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeMode } from './modeSwitchSlice'

function ModeSwitch() {
    const modeValue = useSelector(state => state.modeSwitch.mode)
    const dispatch = useDispatch()

    function handleOnChange() {
        dispatch(changeMode());
    }

    return (
        <div className="mode-switch">
            <span className={"switch-label" + (modeValue ? " dark" : "")}>Change light/dark mode: </span>
            <span className="switch-main">
                <label className="switch">
                    <input type="checkbox" defaultChecked={modeValue} onChange={() => handleOnChange()} />
                    <span className="slider"></span>
                </label>
            </span>
        </div>
    )
}

export default ModeSwitch;