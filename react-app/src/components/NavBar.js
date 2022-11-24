import { useSelector } from "react-redux";
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import LoginFormModal from "./LoginFormModal";
import SignUpFormModal from "./SignupFormModal";


const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user)

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
          <NavLink to='/create-question' exact={true} activeClassName='active'>
            Add Question
          </NavLink>
        </div>
        <div>
          <LogoutButton />
        </div>
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
      </>
    )
  }
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          {userLinks}
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
