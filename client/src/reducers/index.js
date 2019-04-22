import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import publicGalleryReducer from './publicGalleryReducer';

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    publicGallery: publicGalleryReducer
});
