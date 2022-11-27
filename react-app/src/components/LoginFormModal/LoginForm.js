import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import SignUpFormModal from '../SignupFormModal';
import './login.css'

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(["The provided credentials were invalid"]);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form onSubmit={onLogin}>
      <div className='logcontainer'>
        <div className='logwrapper'>
          <div className='welcomwrapper'>
            <div className='page-header'> Welcome to Fourth Quorra!</div>
            <div className='login'>Log in</div>
          </div>
          <div>
            {errors.map((error, ind) => (
              <ul className='logerr' key={ind}>{error}</ul>
            ))}
          </div>
          <div className='logdiv'>
            <input
              className='logput'
              name='email'
              type='email'
              placeholder='Email'
              value={email}
              onChange={updateEmail}
            />
          </div>
          <div className='logdiv'>
            <input
              className='logput'
              required
              minlength='6'
              maxlength='20'
              name='password'
              type='password'
              placeholder='Password'
              value={password}
              onChange={updatePassword}
            />
            <button className='logbtn' type='submit'>Login</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
