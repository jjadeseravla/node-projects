import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:4000/api/user/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = response.json();
      if (!response.ok) {
        setIsLoading(false);
        setError(data.error);
        console.log(isLoading)
      }
      if (response.ok) {
        // take JSON webtoken we get back and store it somewhere in the browser, so
        // if user closes browser and opens it again onto the website, they still have
        // that JSON webtoken for that user stored in the browser, by saving it to local storage
        localStorage.setItem('user', JSON.stringify(data)); // data being the email and JSON webtoken we get back
        // update authContext with the user email we get back
        // so we are storing the email in the user property in dispatch, with the action LOGIN
        dispatch({ type: 'LOGIN', payload: data });
        // update loading state to null again cos we finished
        setIsLoading(false);
      }
    } catch (e) {
      console.log(e.message);
    }
  }
  return { signup, isLoading, error }
}
