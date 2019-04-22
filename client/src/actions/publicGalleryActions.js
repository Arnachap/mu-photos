import axios from 'axios';

import { ADD_PUBLIC_GALLERY, GET_PUBLIC_GALLERIES, GET_ERRORS } from './types';

// Add Gallery
export const addPublicGallery = publicGalleryData => dispatch => {
    axios
        .post('/api/publicgalleries', publicGalleryData)
        .then(res =>
            dispatch({
                type: ADD_PUBLIC_GALLERY,
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

// Get Galleries
export const getPublicGalleries = () => dispatch => {
    axios
        .get('/api/publicgalleries')
        .then(res =>
            dispatch({
                type: GET_PUBLIC_GALLERIES,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_PUBLIC_GALLERIES,
                payload: null
            })
        );
}