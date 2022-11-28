import { configureStore } from "@reduxjs/toolkit";

const initialState:any = {
    url: '',
    date: '',
    koData: {},
    enData: {},
    jaData: {}
}
const saveDataReducer = (state = initialState, action:any) => {
    if (action.type == 'saveUrl') {
        return { ...state, url: action.payload }
    } else if (action.type == 'saveDate') {
        return { ...state, date: action.payload }
    }
    else if (action.type == 'saveKoData') {
        return { ...state, koData: action.payload }
    } else if (action.type == 'saveEnData') {
        return { ...state, enData: action.payload }
    } else if (action.type == 'saveJaData') {
        return { ...state, jaData: action.payload }
    }
}
export const storeEachObject = configureStore({ reducer: saveDataReducer })



