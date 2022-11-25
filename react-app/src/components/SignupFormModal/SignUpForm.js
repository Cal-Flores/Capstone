import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [profile_pic, setProfilePic] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const obj = {
        first_name,
        last_name,
        profile_pic,
        username,
        email,
        password
      }
      const data = await dispatch(signUp(obj));
      if (data) {
        setErrors(data)
      }
    } else {
      setErrors(['Password and Repeat Password must match'])
    }

    // if (!profile_pic.includes('.png') || !profile_pic.includes('.jpg') || !profile_pic.includes('.jpeg') || !profile_pic.includes('.gif')) {
    //   setErrors([])
    // }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }


  return (
    <form onSubmit={onSignUp}>
      <div>Welcome to Fourth Quorra!</div>
      <div>Sign up</div>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div>
        <input
          placeholder='User Name'
          required
          minlength='4'
          maxlength='15'
          type='text'
          name='username'
          onChange={updateUsername}
          value={username}
        ></input>
      </div>
      <div>
        <input
          placeholder='Email'
          required
          type='email'
          name='email'
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div>
        <input
          placeholder='First Name'
          required
          minlength='2'
          maxlength='15'
          type='text'
          name='firstname'
          onChange={(e) => setFirstName(e.target.value)}
          value={first_name}
        ></input>
      </div>
      <div>
        <input
          placeholder='Last Name'
          required
          minlength='2'
          maxlength='15'
          type='text'
          name='lastname'
          onChange={(e) => setLastName(e.target.value)}
          value={last_name}
        ></input>
      </div>
      <div>
        <input
          placeholder='Profile Picture (optional)'
          type='text'
          name='profilepic'
          onChange={(e) => setProfilePic(e.target.value)}
          value={profile_pic}
        ></input>
      </div>
      <div>
        <input
          placeholder='Password'
          type='password'
          name='password'
          required
          minlength='6'
          maxlength='20'
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div>
        <input
          placeholder='Repeat Password'
          required
          minlength='6'
          maxlength='20'
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
        ></input>
      </div>
      <button type='submit'>Sign Up</button>
    </form>
  );
};

export default SignUpForm;
