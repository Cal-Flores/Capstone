import { useDispatch, useSelector } from "react-redux";
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import LoginFormModal from "./LoginFormModal";
import SignUpFormModal from "./SignupFormModal";
import CreateQuestionFormModal from "./CreateQuestionForm/CreateQuestionModal";
import ProfileButton from "./ProfileButton/profileButon";
import { login } from "../store/session";


const NavBar = () => {
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user)
  const demoUser = () => {
    const obj = {
      'email': 'demo@aa.io',
      'password': 'password'
    }
    dispatch(login(obj.email, obj.password))
  }

  let userLinks;
  if (sessionUser) {
    userLinks = (
      <div>
        <div>
          <NavLink to='/your-questions' exact={true} activeClassName='active'>
            My Contents
          </NavLink>
        </div>
        <div>
          <CreateQuestionFormModal />
        </div>
        <div><ProfileButton /></div>
      </div>
    )
  } else {
    userLinks = (
      <>
        <div>
          <LoginFormModal />
        </div>
        <div>
          <SignUpFormModal />
        </div>
        <button onClick={demoUser}>
          Demo User
        </button>
      </>
    )
  }
  return (
    <nav>
      <div>
        <NavLink to='/' exact={true} activeClassName='active'>
          Home
        </NavLink>
      </div>
      <div>
        {userLinks}
      </div>

    </nav>
  );
}

export default NavBar;
