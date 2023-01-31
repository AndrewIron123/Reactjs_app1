import { configureStore } from '@reduxjs/toolkit'
import modeSwitchReducer from '../features/modeSwitch/modeSwitchSlice';

export default configureStore({
  reducer: {
    modeSwitch: modeSwitchReducer
  }
})