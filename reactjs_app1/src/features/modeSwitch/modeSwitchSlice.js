import { createSlice } from '@reduxjs/toolkit'

function loadDataFromStorage() {
    try {
        const data = localStorage.getItem("modeSwitch");
        const dataAsObj = JSON.parse(data);
        if (dataAsObj && dataAsObj.modeSwitch) {
            const dataModeSw = dataAsObj.modeSwitch;
            const initialMode = dataModeSw.mode;
            return initialMode;
        } else {
            return false;
        }
    } catch (e) {
        console.log(`$Caught error when trying to load data from storage: ${e}`);
        return false;
    }
}

export const modeSwitchSlice = createSlice({
    name: 'modeSwitch',
    initialState: {
        mode: loadDataFromStorage()
    },
    reducers: {
        changeMode: state => {
            state.mode = !state.mode
        }
    }
})


export const { changeMode } = modeSwitchSlice.actions

export default modeSwitchSlice.reducer