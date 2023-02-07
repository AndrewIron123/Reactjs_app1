import { configureStore } from '@reduxjs/toolkit'
import modeSwitchReducer from '../features/modeSwitch/modeSwitchSlice';



function loadDataFromStorage() {
  try {
    const data = localStorage.getItem("modeSwitch");
    if (data) {
      return JSON.parse(data);
    }
  } catch (e) {
    console.log(`Caught error when trying to load data from storage: ${e}`);
  }
}


function saveDataToStorage(data) {
  try {
    const dataAsString = JSON.stringify(data);
    localStorage.setItem("modeSwitch", dataAsString);
  } catch (e) {
    console.log(`Caught error when trying to add data to storage: ${e}`);
  }
}


const store = configureStore({
  reducer: {
    modeSwitch: modeSwitchReducer
  }
}, loadDataFromStorage());

store.subscribe(() => saveDataToStorage(store.getState()));
export default store;