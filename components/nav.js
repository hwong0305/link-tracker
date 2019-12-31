import { Fragment, useContext, useState } from 'react';
import { ThreeBars } from 'styled-icons/octicons/ThreeBars';
import { AuthContext } from '../context/authContext';
import MobileMenu from './mobileMenu';

import {
  Brand,
  CollapsingDiv,
  HiddenMenu,
  NavIconButton,
  NavButton,
  NavLink,
  StyledNav,
} from '../util/nav';

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const { loggedIn, changeLoggedIn, setUser, setToken } = useContext(
    AuthContext
  );
  const logout = () => {
    changeLoggedIn(false);
    setUser('');
    setToken('');
  };
  return (
    <StyledNav>
      {toggle && (
        <MobileMenu
          loggedIn={loggedIn}
          logout={logout}
          click={() => {
            setToggle(!toggle);
          }}
        />
      )}
      <Brand>Link Tracker</Brand>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CollapsingDiv>
          {loggedIn ? (
            <NavButton onClick={logout}>Logout</NavButton>
          ) : (
            <Fragment>
              <NavLink href="/register" alt="Sign Up">
                Sign Up
              </NavLink>
              <NavLink href="/login" alt="Login Page">
                Login
              </NavLink>
            </Fragment>
          )}
        </CollapsingDiv>
        <HiddenMenu>
          <NavIconButton type="button" onClick={() => setToggle(!toggle)}>
            <ThreeBars size="34" />
          </NavIconButton>
        </HiddenMenu>
      </div>
    </StyledNav>
  );
};

export default Nav;
