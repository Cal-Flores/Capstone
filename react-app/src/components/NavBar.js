import { useDispatch, useSelector } from "react-redux";
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import LoginFormModal from "./LoginFormModal";
import SignUpFormModal from "./SignupFormModal";
import CreateQuestionFormModal from "./CreateQuestionForm/CreateQuestionModal";
import ProfileButton from "./ProfileButton/profileButon";
import { login } from "../store/session";
import './NavBar.css'


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
      <div className="userlinks2">
        <div>
          <div ClassName='myycontent'>
            <NavLink to='/your-questions' exact={true} >
              My Contents
            </NavLink>
          </div>
        </div>
        <div className="addquestion">
          <CreateQuestionFormModal />
        </div>
        <div className="profileimg"><ProfileButton /></div>
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
    <nav className="navwrapper">
      <div className="fqlogo">
        <NavLink to='/' exact={true} ClassName='fglogotext'>
          Fourth Quorra
        </NavLink>
      </div>
      <div className="userlinks">
        {userLinks}
      </div>

    </nav>
  );
}

export default NavBar;
