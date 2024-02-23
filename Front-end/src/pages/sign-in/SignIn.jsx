import { useState , useEffect } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { loginUserAsync } from '../../actions/user';
import { useNavigate } from 'react-router-dom';


const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [password, setPassword] = useState('');
  const userData = useSelector(state => state.user.userData);


  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === 'username') {
      setFirstName(value);
    } else if (id === 'password') {
      setPassword(value);
    }
  };
  
  useEffect(() => {
    if (userData !== null) { 
      navigate("/profile"); 
    }
  }, [userData, navigate]);


  
  const handleSignIn = (e) => {
    e.preventDefault();
    dispatch(loginUserAsync(firstName, password));
  };

  return (
    <div className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSignIn}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      </section>
    </div>
  );
};

export { SignIn };
