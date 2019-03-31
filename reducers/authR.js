const initState = {
    authError: null
}
  
const authReducer = (state = initState, action) => {
    switch(action.type){
      case 'LOGIN_ERR':
        console.log('login error');
        return {
          ...state,
          authError: 'Login failed'
        }
      case 'LOGIN_SUCCESS':
        console.log('login success');
        return {
          ...state,
          authError: null
        }
      case 'SIGNOUT_SUCCESS':
        console.log('signout success');
        return state

      case 'SIGNUP_SUCCESS':
        console.log('signUp success');
        return {
          ...state,
          authError: null
        }
      case 'SIGNUP_ERR':
        console.log('signUp Error', action.err.message);
        return {
          ...state,
          authError: action.err.message
        }
      default:
        return state
    }
};
  
export default authReducer;