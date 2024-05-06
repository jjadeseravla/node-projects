import { createContext, useReducer, useEffect } from 'react';

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload }
    case 'LOGOUT':
      return { user: null }
    default:
      return state
  }
}

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null
  });

  useEffect(() => { // useEffect fires only once, and we want to check do we already have a token for user
    const user = JSON.parse(localStorage.getItem('user')); // when its stored its a string, but need an obj, so we need to parse it
    if (user) { // if user exists then we can dispatch login action
      dispatch({type: 'LOGIN', payload: user})
    }
  }, [])

  // console.log('AuthContext state: ', state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}