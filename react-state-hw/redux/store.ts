import { configureStore } from "@reduxjs/toolkit";

const initialState:any = {
    url: '',
    date: '',
    koArtistName: '',
    koProductName: '',
    koLocation: '',
    koThumbnailUrl: '',
    enArtistName: '',
    enProductName: '',
    enLocation: '',
    enThumbnailUrl: '',
    jaArtistName: '',
    jaProductName: '',
    jaLocation: '',
    jaThumbnailUrl: '',
}
const saveDataReducer = (state = initialState, action:any) => {
    if (action.type == 'saveUrl') {
        return { ...state, url: action.payload }
    } else if (action.type == 'saveDate') {
        return { ...state, date: action.payload }
    }
    else if (action.type == 'saveKoArtistName') {
        return { ...state, koArtistName: action.payload }
    } else if (action.type == 'saveKoProductName') {
        return { ...state, koProductName: action.payload }
    } else if (action.type == 'saveKoLocation') {
        return { ...state, koLocation: action.payload }
    } else if (action.type == 'saveKoThumbnailUrl') {
        return { ...state, koThumbnailUrl: action.payload }
    } 
    else if (action.type == 'saveEnArtistName') {
        return { ...state, enArtistName: action.payload }
    } else if (action.type == 'saveEnProductName') {
        return { ...state, enProductName: action.payload }
    } else if (action.type == 'saveEnLocation') {
        return { ...state, enLocation: action.payload }
    } else if (action.type == 'saveEnThumbnailUrl') {
        return { ...state, enThumbnailUrl: action.payload }
    } 
    else if (action.type == 'saveJaArtistName') {
        return { ...state, jaArtistName: action.payload }
    } else if (action.type == 'saveJaProductName') {
        return { ...state, jaProductName: action.payload }
    } else if (action.type == 'saveJaLocation') {
        return { ...state, jaLocation: action.payload }
    } else if (action.type == 'saveJaThumbnailUrl') {
        return { ...state, jaThumbnailUrl: action.payload }
    }
}
export const store = configureStore({ reducer: saveDataReducer })



