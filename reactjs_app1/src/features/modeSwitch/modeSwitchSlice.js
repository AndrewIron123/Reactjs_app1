import { createSlice } from '@reduxjs/toolkit'

export const modeSwitchSlice = createSlice({
    name: 'modeSwitch',
    initialState: {
        lightMode: true
    },
    reducers: {
        changeMode: state => {
            state.lightMode = !state.lightMode
        }
    }
})


export const { changeMode } = modeSwitchSlice.actions

export default modeSwitchSlice.reducer