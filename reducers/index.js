import { combineReducers } from "redux";
import countR from "./countR";
import tickR from "./tickR";
import postR from "./postR";
import authR from './authR';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'

export default combineReducers({
  countR,
  tickR,
  postR,
  authR,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});
