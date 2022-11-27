import { createStoreHook } from "react-redux";

const dataAction = (data:any) => {
    type: 'dataAction';
    payload: data;
}

const initialState = {
    koArtistName: '가수이름'
}
const saveDataReducer = (state = initialState, action:any) => {
    if (action.type == 'dataAction') {
        return {
            ...state,
            koArtistName: state.koArtistName
        }
    }
}
const store = createStoreHook()