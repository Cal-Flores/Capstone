import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from 'react-router-dom'
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import LoginFormModal from "./LoginFormModal";
import SignUpFormModal from "./SignupFormModal";
import CreateQuestionFormModal from "./CreateQuestionForm/CreateQuestionModal";
import ProfileButton from "./ProfileButton/profileButon";
import { login } from "../store/session";
import './NavBar.css'
import AboutModal from "./NavModal";
import Searchbar from "./SearchBar/searchBar";


const NavBar = () => {
  const dispatch = useDispatch()
  const history = useHistory()
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
      // <div className="userlinks2">
      <div className="userlinks2">
        <div
          className="yourcontent" onClick={(e) => history.push('/your-contents')}>Content
        </div>
        <div className="addquestion">
          <CreateQuestionFormModal />
        </div>
        <div className="profileimg">
          <ProfileButton />
        </div>
      </div>
      //</div>
    )
  } else {
    userLinks = (
      <div className="outcontainer">
        <div className="outwrapper">
          <div>
            <LoginFormModal />
          </div>
          <div>
            <SignUpFormModal />
          </div>
          <button className="outbtn" onClick={demoUser}>
            Demo
          </button>
        </div>
      </div>
    )
  }
  return (
    <nav className="navhead">
      <div className="navcontainer">
        <div className="navwrapper">
          <div className="permlinks">
            <div className='fq'>
              Fourth Quorra
            </div>
            <div onClick={(e) => history.push('/')} className="hi">
              <i class="fa-sharp fa-solid fa-house"></i>
            </div>
            <div className="about">
              <AboutModal />
            </div>
            <div>
              < Searchbar />
            </div>
            <div >
              {userLinks}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

{/* <div onClick={(e) => history.push('/')} ClassName='fglogotext'>
  <div
    className='fq'> Fourth Quorra <span className="hi"><i class="fa-sharp fa-solid fa-house"></i> </span>
  </div>
  <div className="about">About</div>
</div> */}
