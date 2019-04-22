import { ADD_PUBLIC_GALLERY, GET_PUBLIC_GALLERIES } from '../actions/types';

const initialState = {
    publicGalleries: [],
    publicGallery: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PUBLIC_GALLERIES:
            return {
                ...state,
                publicGalleries: action.payload
            }
        case ADD_PUBLIC_GALLERY:
            return {
                ...state,
                publicGalleries: [action.payload, ...state.publicGalleries]
            }; 
                    default:
                    return state;
                }
            
}