import { combineReducers } from 'redux'
import  authReduces from './authReducer'
import {firebaseReducer} from 'react-redux-firebase'
import {firestoreReducer} from 'redux-firestore'

const rootReducers  = combineReducers({
    auth:      authReduces,
    firebase:  firebaseReducer,
    firestore: firestoreReducer
});

export default rootReducers;

