import { configureStore } from "@reduxjs/toolkit";


const initialState:any = {
    singleData: {}
}
const saveDataReducer = (state = initialState, action:any) => {
    if (action.type == 'saveData') {
        return { ...state, singleData: action.payload }
    }
}
export const storeTopObject = configureStore({ reducer: saveDataReducer })



