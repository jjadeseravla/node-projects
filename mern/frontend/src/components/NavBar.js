import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';

const NavBar = () => {

  const { logout } = useLogout();


  return (
    <header>
      <div className="container">
        <Link to='/'>
          <h1>Wokout buddy</h1>
        </Link>
        <nav>
          <div>
            {/* removed logout() */}
          <button onClick={() => logout()}>Logout</button>
          </div>
          <div>
            <Link to="/login"> Login</Link>
            <Link to="/signup"> Signup</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default NavBar;