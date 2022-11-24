import React, { useEffect, useState } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";

function ProfileButton() {
    const history = useHistory()
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const user = useSelector(state => state.session.user)

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
        history.push('/')

    };

    return (
        <>
            <div className="dropdown">
                {user &&
                    <div className="userNav" onClick={openMenu}>
                        <img src={user?.profile_pic} onError={(e) => { e.target.src = 'https://cdn-icons-png.flaticon.com/128/149/149071.png' }} style={{ width: '40px', height: '40px', borderRadius: '25px' }} />
                    </div>
                }
            </div>
            {
                showMenu && (
                    <>
                        <ul className="profile-dropdown">
                            <div className="textdiv">
                                <li>{user.username}</li>
                                <li>{user.email}</li>
                                <div>
                                    <button className="logoutBtn" onClick={logout}>Log Out</button>
                                </div>
                            </div>
                        </ul>
                    </>
                )
            }
        </>
    );
}

export default ProfileButton;
