import axios from 'axios';

import { ADD_GALLERY, GET_ERRORS } from './types';

// Add Gallery
export const addGallery = galleryData => dispatch => {
    axios
        .post('/api/publicgalleries', galleryData)
        .then(res =>
            dispatch({
                type: ADD_GALLERY,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}