import { LOGIN_SUCCESS, LOGIN_ERR, SIGNOUT_SUCCESS, SIGNUP_SUCCESS, SIGNUP_ERR} from './types';

export const LogIn = (credentials) => {
    return (dispatch, getState, { getFirebase}) => {
        const firebase=getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(()=>{
            dispatch({type: LOGIN_SUCCESS})
        }).catch((err)=> {
            dispatch({type: LOGIN_ERR, err})
        })
    }
}

export const SignUp = (credentials) => {
    return (dispatch, getState, { getFirestore ,getFirebase}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        firebase.auth().createUserWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then((resp)=>{
            return firestore.collection('users').doc(resp.user.uid).set({
                userName: credentials.userName,
                passBoard: credentials.passBoard,
                email: credentials.email,
                password: credentials.password
            })
        }).then(()=>{
            dispatch({type: SIGNUP_SUCCESS})
        }).catch((err)=> {
            dispatch({type: SIGNUP_ERR, err})
        })
    }
}

export const SignOut = () => {
    return (dispatch, getState, {getFirebase}) => {
      const firebase = getFirebase();
  
      firebase.auth().signOut().then(() => {
        dispatch({ type: SIGNOUT_SUCCESS })
      });
    }
  }
