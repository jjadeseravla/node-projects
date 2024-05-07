import { useAuthContext } from './useAuthContext';
import { useWorkoutsContext } from './useWorkoutsContext';

export const useLogout = () => {

  const { dispatch } = useAuthContext();
  const { dispatch: workoutsDispatch } = useWorkoutsContext();

  const logout = () => {
    //global state and JSON webtoken in local storage is how we
    // know we are logged in, so dont need to send a request to backend
    //we just need to delete those
    localStorage.removeItem('user');

    dispatch({ type: 'LOGOUT' });
    // now when we log out, in order to clear out workouts in local state:
    workoutsDispatch({type: 'SET_WORKOUTS', payload: null})
  }
  return {logout}
}