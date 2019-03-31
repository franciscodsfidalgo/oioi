import { NEW_POST, INCREMENT_POST, DECREMENT_POST, DECREMENT_ERR, INCREMENT_ERR, DELETE_POST, NEW_POST_ERR } from "./types";
import _ from 'lodash';

// action creators

export const increment = (p) => {
  return (dispatch, getState, { geFirebase, getFirestore}) => {
    const firestore =  getFirestore();
    var upvotes = Number(p.upvotes) + 1 ; 
    firestore.collection('posts').doc(String(p.id)).update({
      upvotes: upvotes
    }).then( () => {
      dispatch({ type: INCREMENT_POST, p})
    }).catch( (err) => {
      dispatch({ type: INCREMENT_ERR, err})
    })
  };
};

export const decrement = (p) => {
  return (dispatch, getState, { geFirebase, getFirestore}) => {
    const firestore =  getFirestore();
    var downvotes = Number(p.downvotes) + 1 ; 
    firestore.collection('posts').doc(String(p.id)).update({
      downvotes: downvotes
    }).then( () => {
      dispatch({ type: DECREMENT_POST, p})
    }).catch( (err) => {
      dispatch({ type: DECREMENT_ERR, err})
    })
  };
}

export const protoDeletePost = (p) => dispatch => {
  return dispatch({ type: DELETE_POST, p })
};

export const deletePost = (p) => {
  return (dispatch, getState, { geFirebase, getFirestore}) => {
    const firestore =  getFirestore();
    firestore.collection('posts').doc(String(p.id)).delete()
    .then( () => {
      dispatch({ type: DELETE_POST})
    }).catch( (err) => {
      dispatch({ type: DELETE_ERR, err})
    })
  };
}

export const createPost = (p) => {
  return (dispatch, getState, { geFirebase, getFirestore}) => {
    const firestore =  getFirestore();
    firestore.collection('posts').doc(String(p.id)).set({
      ...p
    }).then( () => {
      dispatch({ type: NEW_POST, p})
    }).catch( (err) => {
      dispatch({ type: NEW_POST_ERR, p})
    })
  }
};


/*const firestore =  getFirestore();
    fetch("http://jumpapplication.com/overheardnew.php")
     .then(res => res.json())
     .then(data => { 
      var data = _.values(data);
      data.map( pp => {
        firestore.collection('posts').doc(pp.id).set({
          ...pp
      })}
    )})feacth all data and load to firebase*/