import { useAuthContext } from './useAuthContext';

export const useLogout = () => {

  const { dispatch } = useAuthContext();

  const logout = () => {
    //global state and JSON webtoken in local storage is how we
    // know we are logged in, so dont need to send a request to backend
    //we just need to delete those
    localStorage.removeItem('user');

    dispatch({ type: 'LOGOUT' });
  }
  return {logout}
}