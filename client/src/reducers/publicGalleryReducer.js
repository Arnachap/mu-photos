import { ADD_GALLERY } from '../actions/types';

const initialState = {
    galleries: [],
    gallery: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_GALLERY:
            return {
                ...state,
                galleries: [action.payload, ...state.galleries]
            }

        default:
            return state;
    }
}