import { NEW_POST, INCREMENT_POST, DECREMENT_POST, DELETE_POST, INCREMENT_ERR, DECREMENT_ERR, NEW_POST_ERR } from "../actions/types";

// REDUCERS
export default function(state = { items: [], item: null, deleteId: null }, action) {
  switch (action.type) {
    case NEW_POST:
      console.log("NEW_POST", state, action);
      state.items.unshift(action.p);
      return Object.assign({}, state)
    
    case NEW_POST_ERR:
      console.log("NEW_POST_ERR", state, action);
      return state 
      
    case INCREMENT_POST:
      return Object.assign({}, state)

    case DECREMENT_POST:
      return Object.assign({}, state)

    case INCREMENT_ERR:
      return Object.assign({}, state)

    case DECREMENT_ERR:
      return Object.assign({}, state)

    case DELETE_POST:
      console.log(state, action);
      return Object.assign({}, state)
  
    default:
      console.log("DEFAULT_post");
      return state
  }
}
