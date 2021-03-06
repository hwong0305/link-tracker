import { Fragment, useContext, useState } from 'react';
import Cookies from 'js-cookie';
import { ThreeBars } from 'styled-icons/octicons/ThreeBars';
import { AuthContext } from '../context/authContext';
import MobileMenu from './subcomponents/mobileMenu';

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
  const { user, setUser, setToken } = useContext(AuthContext);
  const logout = () => {
    Cookies.remove('userstatus');
    setUser(null);
    setToken(null);
  };
  return (
    <StyledNav>
      {toggle && (
        <MobileMenu
          loggedIn={!!user}
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
          {user ? (
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
          <NavIconButton
            type="button"
            aria-label="Menu"
            onClick={() => setToggle(!toggle)}
          >
            <ThreeBars size="34" />
          </NavIconButton>
        </HiddenMenu>
      </div>
    </StyledNav>
  );
};

export default Nav;
