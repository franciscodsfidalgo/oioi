import { createStore, applyMiddleware, compose } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from 'redux-thunk'
import rootReducer from "./reducers"
import {getFirestore, reduxFirestore} from 'redux-firestore'
import {getFirebase, reactReduxFirebase} from 'react-redux-firebase'
import configFB from "./configFB"

export function initializeStore(state = {}) {
  return createStore(
    rootReducer,
    state,
    composeWithDevTools(
      applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
      reduxFirestore(configFB),
      reactReduxFirebase(configFB)
    )
  );
}
