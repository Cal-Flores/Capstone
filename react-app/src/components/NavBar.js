import { useSelector } from "react-redux";
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import LoginFormModal from "./LoginFormModal";


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
      </>
    )
  }
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            FourthQuorra
          </NavLink>
        </li>
        <li>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li>
        <li>
        </li>
        <li>

        </li>
        <li>

        </li>
        <li>

        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
