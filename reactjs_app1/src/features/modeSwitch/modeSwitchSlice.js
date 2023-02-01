import { createSlice } from '@reduxjs/toolkit'

export const modeSwitchSlice = createSlice({
    name: 'modeSwitch',
    initialState: {
        mode: false
    },
    reducers: {
        changeMode: state => {
            state.mode = !state.mode
        }
    }
})


export const { changeMode } = modeSwitchSlice.actions

export default modeSwitchSlice.reducer