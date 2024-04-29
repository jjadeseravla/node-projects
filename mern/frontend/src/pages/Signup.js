import { useState } from 'react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('done')
}


  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>
        Sign up
      </h3>
      <label>
        Email: 
      </label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
 <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button>
        Signup
      </button>
    </form>
  )
}

export default Signup;